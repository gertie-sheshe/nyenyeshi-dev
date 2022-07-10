import Article from "@blog/components/Article";
import { fetchCategoryPosts, fetchCurrentPost } from "@blog/utils/sanitycms";

export default function Index(props) {
  return <Article />;
}

export const getStaticPaths = async (context) => {
  const posts = await fetchCategoryPosts("frontend");

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
      post,
    },
    revalidate: 5,
  };
};
