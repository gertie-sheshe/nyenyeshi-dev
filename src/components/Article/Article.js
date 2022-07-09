import React from "react";
import { ArticleContainer, H2, P, Link, ListItem } from "./ArticleStyles";
import { PortableText } from "@portabletext/react";

function Article({ post }) {
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
    listItem: ListItem,
  };

  return (
    <ArticleContainer>
      <H2>{title}</H2>
      <PortableText value={body} components={components} />
    </ArticleContainer>
  );
}

export default Article;
