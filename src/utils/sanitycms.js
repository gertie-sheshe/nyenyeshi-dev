import { sanityClient } from "sanity";
import { groq } from "next-sanity";

export const fetchAllPosts = async () => {
  const postsQuery = groq`* [_type == "post"]`;
  const posts = await sanityClient.fetch(postsQuery);

  return posts;
};

export const fetchCurrentPost = async (slug) => {
  const postQuery = groq`* [_type == "post" && slug.current == "${slug}"]`;
  const post = await sanityClient.fetch(postQuery);

  return post;
};

export const fetchCategoryPosts = async (category) => {
  const postsQuery = groq`* [_type == "post" && '${category}' in categories[]->title]`;
  const posts = await sanityClient.fetch(postsQuery);

  return posts;
};
