import React from "react";
import { H2, P, ArticleContainer, HR } from "./ArticlePreviewStyles";

function ArticlesPreview({ post }) {
  if (!post) {
    return null;
  }
  const { title, summary } = post;

  return (
    <>
      <ArticleContainer>
        <H2>{title}</H2>
        <P>{summary}</P>
      </ArticleContainer>
      <HR />
    </>
  );
}

export default ArticlesPreview;
