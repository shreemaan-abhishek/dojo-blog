import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const deleteBlog = (id) => {
      const newData = blogs.filter((blog) => blog.id !== id)
      setBlogs(newData)
  }

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
    .then( res => {
        return res.json()
    })
    .then( resarray => setBlogs(resarray))
  }, [])
  return (
    <div className="home">
        { blogs && <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog} />}
        {/* <BlogList blogs={blogs.filter( (blog) => blog.author ===  'mario')} title="Mario's Blogs" deleteBlog={deleteBlog} /> */}
        
    </div>
  );
}
 
export default Home;