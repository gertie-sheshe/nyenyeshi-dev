import ArticlesPreviewList from "@blog/components/ArticlesPreviewList";
import { fetchCategoryPosts } from "@blog/utils/sanitycms";

export default function Index({ posts }) {
  return (
    <>
      <ArticlesPreviewList posts={posts} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const posts = await fetchCategoryPosts("accessibility");

  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
};
