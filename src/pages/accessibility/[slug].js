import Article from "@blog/components/Article";
import { fetchCategoryPosts, fetchCurrentPost } from "@blog/utils/sanitycms";

export default function Index({ post }) {
  return <Article post={post} />;
}

export const getStaticPaths = async (context) => {
  const posts = await fetchCategoryPosts("accessibility");

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
  };
};
