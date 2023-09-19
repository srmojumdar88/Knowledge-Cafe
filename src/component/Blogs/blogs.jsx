import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";



const Blogs = ({addToBookmark,addReadTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h2>Blogs:{blogs.length}</h2>
            <div className="grid gap-5">
            {
                blogs.map((blog,idx)=> <Blog 
                    key={idx} 
                    blog={blog} 
                    addToBookmark={addToBookmark}
                    addReadTime={addReadTime}
                ></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;
