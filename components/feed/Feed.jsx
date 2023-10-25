import { useState, useEffect } from 'react';
import Post from '../post/Post';
/* import Share from '../share/Share'; */
import styles from './Feed.module.css';
import axios from 'axios';

export default function Feed() {
  const [posts,setPosts] = useState([]);
  const profileUrl = process.env.REACT_APP_PROFILE_URL;
  const postsUrl = process.env.REACT_APP_POSTS_URL;
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  useEffect(() => {
   /* console.log('feed rendered'); */
   const fetchPosts = async () => {
   const data = JSON.stringify({user, token});

   const options = {
    method: "GET",
    body: data,
    headers: {
        "Content-Type": "application/json"
    }
   }
   console.log(user);
   console.log(token);

    await axios.get(postsUrl, options);
    
   }
    fetchPosts(); 
  }, []) /* Empty array dependency, to avoid rendering multiple times, If text in the array, every time the text changes in the input field, the feed function is rendered again */
  return (
    <div className={styles.feed}>
     {/*  <input type="text" onChange={e=>setText(e.target.value)} /> */}
        <div className={styles.wrapper}>
            {/* {(!username || username === currentUser.username)  && <Share />} */}
            {posts.map((p) => (
              <Post key={p._id} post={p} />
            ))}   
        </div>
    </div>
  )
}
