import Article from "@blog/components/Article";
import Head from "next/head";

import { fetchAllPosts, fetchCurrentPost } from "@blog/utils/sanitycms";

export default function Index({ post }) {
  const { title, summary: description } = post;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Article post={post} />
    </>
  );
}

export const getStaticPaths = async (context) => {
  const posts = await fetchAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetchCurrentPost(params.slug);

  return {
    props: {
      post: post[0],
    },
    revalidate: 5,
  };
};
