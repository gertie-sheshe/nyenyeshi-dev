import React from "react";
import { ArticleContainer, H2, P, Link, Pre } from "./ArticleStyles";
import { PortableText } from "@portabletext/react";

function Article({ post }) {
  if (!post.title || !post.body) {
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
      code: ({ value, children }) => {
        return (
          <Pre>
            <code>{value.code}</code>
          </Pre>
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
