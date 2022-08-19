import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useColorModeValue } from "@chakra-ui/react";
import { orderBy } from "lodash/fp";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import matter from "gray-matter";

import { Content } from "src/types/content";
import { getContentPathsForLocale, readLocaleContent } from "src/utils/content";

type Props = {
  posts: Content[];
};

const Posts = ({ list }: { list: Content[] }) => {
  const borderColor = useColorModeValue('var(--chakra-colors-gray-300)', 'var(--chakra-colors-gray-700)');

  return (
    <>
      {list.map((post: Content) => {
        try {
          return (
            <article key={post.slug} style={{
              border: `1px solid ${borderColor}`,
              borderRadius: "5px",
              padding: "0.5rem",
              marginTop: "2rem",
            }}>
              <h2 style={{
                margin: '0',
                marginLeft: "5px"
              }}>
                <Link href={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <p style={{
                margin: '0',
                marginLeft: "5px"
              }}>
                <time>{format(parseISO(post.date!), "yyyy-MM-dd")}</time> by{" "}
                {post.author}
              </p>
            </article>
          );
        } catch (e) {
          console.error("Failed to generate post", post.title, "Error:", e.message);
        }
      })}
    </>
  );
}

const NoContent = () => <h3>There are currently no posts.</h3>;

const PostList = ({ list }: { list: Content[] }) =>
  list ? <Posts list={list} /> : <NoContent />;

const Page = ({ posts }: Props) => (
  <>
    <NextSeo
      title="Blog"
      description="The official open.mp development and community blog."
    />

    <section className="measure-wide center pb4">
      <h1>Development Blog</h1>
      <PostList list={posts} />
    </section>
  </>
);

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string[] }>
): Promise<GetStaticPropsResult<Props>> {
  const paths = getContentPathsForLocale("blog", "en");

  // read each post and extract the metadata from frontmatter. This is then used
  // in the page to generate the post list with titles, dates, authors, etc.
  const posts: Content[] = await Promise.all(
    paths.map(async (v: string) => {
      const name = v.slice(1, v.length);
      const { source } = await readLocaleContent(name, context.locale || "en");
      const { data } = matter(source);
      data.slug = name.split("/")[1]; // get the slug from the name minus blog/
      return data as Content;
    })
  );

  return {
    props: {
      posts: orderBy("date", "desc")(posts) as Content[],
    },
  };
}

export default Page;
