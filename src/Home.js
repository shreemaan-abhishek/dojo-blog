import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
    .then( res => {
        return res.json()
    })
    .then( resarray => {
        setBlogs(resarray)
        setIsLoading(false)
    })
  }, [])
  return (
    <div className="home">
        { isLoading && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} title="All Blogs" />}
        
    </div>
  );
}
 
export default Home;