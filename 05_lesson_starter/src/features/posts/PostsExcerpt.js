import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {
  //*use createEntitiesAdaptor
  const post = useSelector((state) => selectPostById(state, postId));
  console.warn("post excerpt", post);
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
//*If the component did not received changed component, do not render
// PostsExcerpt = React.memo(PostsExcerpt);

// export default React.memo(PostsExcerpt);
export default PostsExcerpt;
