import { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { Link } from "react-router-dom";



export const Articles = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
    fetch("http://localhost:3001/posts")
                .then(res => res.json())
                .then(json => setPosts(json))
    }, [])
    
return(

   <section className = {styles.blog__article}>
        <div className = {styles.blog__container}>
            <div className = {styles.articles__columns}>
                {
                    posts.map(post =>(
                        <Link key = {post.id} to = {`/blog/${post.id}`}>
                            <div className = {styles.articles__column}>
                                <img src = {post.img} alt = "cars" />
                                <h3>{post.title}</h3>
                                <p>{post.subtitle}</p>
                            </div>        
                        </Link>
                    ))
                }
            </div>
        </div>
   </section>
    
   
    
  


)

}

