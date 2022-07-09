import ArticlesPreviewList from "@blog/components/ArticlesPreviewList";
import { fetchAllPosts } from "@blog/utils/sanitycms";

export default function Index({ posts }) {
  return (
    <>
      <ArticlesPreviewList posts={posts} />
    </>
  );
}

export const getStaticProps = async (context) => {
  const posts = await fetchAllPosts();

  return {
    props: {
      posts,
    },
  };
};
