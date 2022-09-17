import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  //if the user is the same userId passin as prop
  const author = users.find((user) => user.id === userId);

  //if there is user, we display name, otherwise diplay "unknown"
  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
