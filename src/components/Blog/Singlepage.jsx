import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Blog.module.css";
import {Comments} from "./Comments";



export const Singlepage = () => {
const {id} = useParams();
const [posts, setPosts] = useState(null);

   useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
                .then(res => res.json())
                .then(json => setPosts(json))
    }, [id])
   return(
       <>
        <div className = {styles.blog__container}>
            <div className = {styles.single__page}>
                {posts && (
                    <>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                    <p>{posts.body2}</p>
                    <p>{posts.body3}</p>
                     
                    </>  
                )}
            </div>
            <Comments/>
        </div>
       </>
    )
}