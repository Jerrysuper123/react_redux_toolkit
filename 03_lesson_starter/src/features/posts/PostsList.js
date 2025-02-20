import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  // fetchPosts,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  // useEffect(() => {
  //   if (postStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postStatus, dispatch]);

  //*dyanmically show loading or content
  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
