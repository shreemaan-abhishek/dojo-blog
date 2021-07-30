import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const deleteBlog = (id) => {
      const newData = blogs.filter((blog) => blog.id !== id)
      setBlogs(newData)
  }
  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs" deleteBlog={deleteBlog} />
        <BlogList blogs={blogs.filter( (blog) => blog.author ===  'mario')} title="Mario's Blogs" deleteBlog={deleteBlog} />
        
    </div>
  );
}
 
export default Home;