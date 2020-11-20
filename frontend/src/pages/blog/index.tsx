import Link from "next/link";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

type Post = {
  title: string;
  date: string;
  author: string;
  slug: string;
};

const Posts = ({ list }) =>
  list.map((v: Post) => (
    <article key={v.slug} className="ba b--black-10 br3 ph4 mv4">
      <h2>
        <Link href={`/blog/${v.slug}`}>
          <a>{v.title}</a>
        </Link>
      </h2>
      <p>
        <time>{format(parseISO(v.date), "yyyy-MM-dd")}</time> by {v.author}
      </p>
    </article>
  ));

const NoContent = () => <h3>There are currently no posts.</h3>;

const PostList = ({ list }) => (list ? <Posts list={list} /> : <NoContent />);

const Page = () => (
  <section className="measure-wide center pb4">
    <h1>Development Blog</h1>
    <PostList list={process.env.BLOG_POST_LIST} />
  </section>
);

export default Page;
