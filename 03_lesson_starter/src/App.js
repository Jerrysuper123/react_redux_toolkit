import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          {/* /post/:postId */}
          <Route path=":postId" element={<SinglePostPage />} />
          {/* /post/edit/:postId */}
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
