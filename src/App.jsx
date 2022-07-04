import Header from "./components/Header";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Auth from "./components/Auth";
import MyBlog from "./components/MyBlog";
import Profile from "./components/Profile";
import CreateBlog from "./components/CreateBlog";
import Followers from "./components/Followers";
import { Provider, useSelector } from "react-redux";
import Blogs from "./components/Home";


function App() {
  const login = useSelector(state => state.login);
  console.log(login);
  return <React.Fragment >
    
    <header>
      <Header/>
    </header>
    <main >
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/add" element={<CreateBlog />} />
        <Route path="/myBlogs" element={<MyBlog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/followers/:id" element={<Followers />} />
      </Routes>
    </main>
    {/* </Provider> */}
  </React.Fragment>
}

export default App;
