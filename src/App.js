import "./App.css";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import CategoryPosts from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
import DashBoard from "./pages/DashBoard";
import Logout from "./pages/Logout";
import DeletePost from "./pages/DeletePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "register", element: <Register /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: "myposts/:id", element: <DashBoard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "posts/:id/delete", element: <DeletePost /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
  // <BrowserRouter>
  //   <Layout />
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //   </Routes>
  // </BrowserRouter>
}

export default App;
