import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { ArticleContainer, H2, P, Link } from "./ArticleStyles";
import { PortableText } from "@portabletext/react";

function Article({ post }) {
  if (!post) {
    return null;
  }
  const { title, body } = post;

  const components = {
    block: {
      normal: P,
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
