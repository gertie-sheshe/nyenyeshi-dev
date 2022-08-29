import React from "react";

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
import { renderLink, renderCode, renderImage } from "./portables";

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
      link: renderLink,
    },
    types: {
      code: renderCode,
      image: renderImage,
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
