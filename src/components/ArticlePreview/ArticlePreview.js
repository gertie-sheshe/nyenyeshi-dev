import React from "react";
import { H2, P, ArticleContainer } from "./ArticlePreviewStyles";
import { PortableText } from "@portabletext/react";

function ArticlesPreview({ post }) {
  const { title, body } = post;

  const components = {
    block: {
      normal: P,
    },
  };
  return (
    <ArticleContainer>
      <H2>{title}</H2>
      <PortableText value={body} components={components} />
    </ArticleContainer>
  );
}

export default ArticlesPreview;
