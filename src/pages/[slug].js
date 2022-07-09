import Article from "@blog/components/Article";
import { sanityClient } from "sanity";
import { groq } from "next-sanity";

export default function Index(props) {
  return <Article />;
}

export const getStaticPaths = async (context) => {
  const postsQuery = groq`* [_type == "post"]`;
  const posts = await sanityClient.fetch(postsQuery);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const postQuery = groq`* [_type == "post" && slug.current == "${params.slug}"]`;
  const post = await sanityClient.fetch(postQuery);

  return {
    props: {
      post,
    },
  };
};
