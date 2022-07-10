import React from "react";
import { H2, P, ArticleContainer, HR, Published } from "./ArticlePreviewStyles";

function ArticlesPreview({ post }) {
  if (!post) {
    return null;
  }
  const { title, summary, publishedAt } = post;

  const formattedDate = new Date(publishedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <ArticleContainer>
        <H2>{title}</H2>
        <div>
          <Published>{formattedDate}</Published>
        </div>
        <P>{summary}</P>
      </ArticleContainer>
      <HR />
    </>
  );
}

export default ArticlesPreview;
