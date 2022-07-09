import ArticlesPreviewList from "@blog/components/ArticlesPreviewList";
import { sanityClient } from "sanity";
import { groq } from "next-sanity";

export default function Index({ posts }) {
  return (
    <>
      <ArticlesPreviewList posts={posts} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const postsQuery = groq`* [_type == "post"]`;
  const posts = await sanityClient.fetch(postsQuery);

  console.log("SCREAMS", posts);
  return {
    props: {
      posts,
    },
  };
};
