import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

//*loading user when app right from start
import { fetchUsers } from "./features/users/usersSlice";
import { fetchPosts } from "./features/posts/postsSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//use store to dispatch response.data to store directly
//*retrieve data directly at parent, instead of at component
//because component can fail, let data flow down from parent to children
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
