import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import matter from "gray-matter";

import { Content } from "src/types/content";
import { getContentPathsForLocale, readLocaleContent } from "src/utils/content";

type Props = {
  posts: Content[];
};

const Posts = ({ list }: { list: Content[] }) => (
  <>
    {list.map((v: Content) => (
      <article key={v.slug} className="ba b--black-10 br3 ph4 mv4">
        <h2>
          <Link href={`/blog/${v.slug}`}>
            <a>{v.title}</a>
          </Link>
        </h2>
        <p>
          <time>{format(parseISO(v.date!), "yyyy-MM-dd")}</time> by {v.author}
        </p>
      </article>
    ))}
  </>
);

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

  return { props: { posts } };
}

export default Page;
