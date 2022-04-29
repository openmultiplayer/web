import { map } from "lodash/fp";
import { FC } from "react";
import { Post } from "src/types/_generated_Forum";
import { CardList } from "../generic/CardList";
import PostListItem, { PostWithMarkdown } from "./PostListItem";

const PostList: FC<{
  thread: Partial<Post>;
  posts: PostWithMarkdown[];
  onSetReply: (post: Post) => void;
}> = ({ thread, posts, onSetReply }) => {
  return (
    <CardList>
      {map((post: PostWithMarkdown) => (
        <PostListItem
          key={post.id}
          thread={thread}
          post={post}
          onSetReply={onSetReply}
        />
      ))(posts)}
    </CardList>
  );
};

export default PostList;
