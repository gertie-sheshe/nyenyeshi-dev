import { sanityClient } from "sanity";
import { groq } from "next-sanity";

export const fetchAllPosts = async () => {
  const postsQuery = groq`* [_type == "post"] | order(publishedAt desc)`;
  const posts = await sanityClient.fetch(postsQuery);

  return posts;
};

export const fetchCurrentPost = async (slug) => {
  const postQuery = groq`* [_type == "post" && slug.current == "${slug}"] | order(publishedAt desc)`;
  const post = await sanityClient.fetch(postQuery);

  return post;
};

export const fetchCategoryPosts = async (category) => {
  const postsQuery = groq`* [_type == "post" && '${category}' in categories[]->title] | order(publishedAt desc)`;
  const posts = await sanityClient.fetch(postsQuery);

  return posts;
};
