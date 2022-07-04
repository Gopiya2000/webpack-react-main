import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState();
    const sendRequest = async () => {
      const res =await axios
      .get("http://localhost:4567/api/blog")
      .catch(err => console.log(err));
      const data = await res.data;
      return data;
    }
    useEffect(() => {
      console.log("ENTER");
      sendRequest().then(data=> console.log(blogs));
   },[]);
   console.log(blogs);
  return (
    <div>
      <Blog />
      {/* {blogs && blogs.map((blog,index) => 
        <Blog title={blog.title} content={blog.content} image={blog.image} tag={blog.tag} user={blog.User.name}/>
      )} */}
    </div>
  )
}


export default Blogs;