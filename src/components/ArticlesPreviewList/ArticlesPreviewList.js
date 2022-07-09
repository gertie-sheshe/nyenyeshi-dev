import React from "react";
import ArticlePreview from "../ArticlePreview";

function ArticlesPreviewList({ posts }) {
  if (!posts) {
    return null;
  }

  return posts.map((post) => <ArticlePreview key={post._id} post={post} />);
}

export default ArticlesPreviewList;
