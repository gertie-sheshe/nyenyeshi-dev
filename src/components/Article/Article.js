import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Image from "next/image";

import {
  ArticleContainer,
  H2,
  H3,
  H4,
  P,
  Link,
  BlockQuote,
} from "./ArticleStyles";
import { PortableText } from "@portabletext/react";

import { sanityClient } from "sanity";
import imageUrlBuilder from "@sanity/image-url";

function Article({ post }) {
  if (!post) {
    return null;
  }
  const { title, body } = post;
  const builder = imageUrlBuilder(sanityClient);

  function urlFor(source) {
    return builder.image(source);
  }

  const components = {
    block: {
      h3: H3,
      h4: H4,
      normal: P,
      blockquote: BlockQuote,
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <Link href={value?.href} target={target}>
            {children}
          </Link>
        );
      },
    },
    types: {
      code: ({ value }) => {
        return (
          <SyntaxHighlighter language="javascript" style={docco}>
            {value.code}
          </SyntaxHighlighter>
        );
      },
      image: ({ value }) => {
        return (
          <Image
            width={500}
            height={500}
            src={urlFor(value.asset._ref).url()}
            alt=""
          />
        );
      },
    },
  };

  return (
    <ArticleContainer>
      <H2>{title}</H2>
      <PortableText value={body} components={components} />
    </ArticleContainer>
  );
}

export default Article;
