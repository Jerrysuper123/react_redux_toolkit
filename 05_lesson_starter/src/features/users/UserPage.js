import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  //*useParam gets a string
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  //below is not optimized, useselector is triggered each time action happend on increaseCount
  // const postsForUser = useSelector((state) => {
  //   const allPosts = selectAllPosts(state);
  //   return allPosts.filter((post) => post.userId === Number(userId));
  // });
  //*get posts for a given users
  const postsForUser = useSelector((state) =>
    //*memorized selector
    selectPostsByUser(state, Number(userId))
  );

  //*link post title to specific post page
  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section>
      {/* alayws user optional chaining to prevent error in browsers */}
      <h2>{user?.name}</h2>

      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
