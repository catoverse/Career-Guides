import Link from 'next/link';
import getPagesTable from '../api/get-pages-table';

export async function getStaticProps() {
  const posts = await getPagesTable();

  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.slug} href="/[slug]" as={`/${post.slug}`} passHref>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
