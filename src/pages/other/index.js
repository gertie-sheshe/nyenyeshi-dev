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
  const posts = await fetchCategoryPosts("other");

  return {
    props: {
      posts,
      revalidate: 10,
    },
  };
};
