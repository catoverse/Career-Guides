import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import styles from '../styles/guide.module.css';

import getPageBlocks from '../api/get-page-blocks';
import getPagesTable from '../api/get-pages-table';

const Post = ({ post, blocks }) => (
  <div className={styles.container}>
    <h1>{post?.Name}</h1>
    <NotionRenderer blockMap={blocks} />
  </div>
);

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getPagesTable();

  // Find the current blog post by slug
  const post = posts.find((t) => t.slug === slug);

  // Get post's page blocks
  const blocks = await getPageBlocks(post.id);

  return {
    props: {
      blocks,
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPagesTable();

  return {
    paths: posts
      .filter((post) => !!post?.slug)
      .map((post) => ({
        params: {
          slug: post.slug,
        },
      })),
    fallback: false,
  };
}

export default Post;
