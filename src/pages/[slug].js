import Article from "@blog/components/Article";
import { fetchAllPosts, fetchCurrentPost } from "@blog/utils/sanitycms";

export default function Index({ post }) {
  return <Article post={post} />;
}

export const getStaticPaths = async (context) => {
  const posts = await fetchAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await fetchCurrentPost(params.slug);

  return {
    props: {
      post: post[0],
      revalidate: 10,
    },
  };
};
