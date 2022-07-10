import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { A } from "./ArticlePreviewListStyles";

import ArticlePreview from "../ArticlePreview";

function ArticlesPreviewList({ posts }) {
  const router = useRouter();
  const currentPath = router.pathname;

  if (!posts) {
    return null;
  }

  const ArticlePreviewComponent = React.forwardRef(
    function ArticlePreviewComponent({ onClick, href, post }, ref) {
      return (
        <A key={post.title} href={href} onClick={onClick} ref={ref}>
          <ArticlePreview post={post} />
        </A>
      );
    }
  );

  return posts.map((post) => (
    <Link
      key={post._id}
      passHref
      href={
        currentPath.length > 1
          ? `${currentPath}/${post.slug.current}`
          : `/${post.slug.current}`
      }
    >
      <ArticlePreviewComponent post={post} />
    </Link>
  ));
}

export default ArticlesPreviewList;
