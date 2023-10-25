import styles from './Post.module.css';
import {MoreVert} from "@mui/icons-material";
import { useState, useEffect } from 'react';
import Link from "@mui/material/Link";
import axios from 'axios';

export default function Post({post}) {
    /* If likes counter keeps advancing */
    

    useEffect(() => {
        console.log('feed rendered');
        /* const fetchUser = async () => {
         
         const res = await axios.get(`/users?userId=${post.userId}`);
         setUser(res.data);
        }*/ 
         /* fetchUser(); */
      
       }, [post.userId])
       const likeHandler = () => {
       /* try{
            axios.put("/posts/" + post._id+ "/like", {userId:currentUser._id});
        }catch(err){
            console.log(err);
        }
        setLike(isLiked ? like -1 : like +1)
        setisLiked(!isLiked)*/
    }
    
  return (
    <div className={styles.post}>
        <div className={styles.wrapper}>
            <div className={styles.postTop}>
                <div className={styles.postTopLeft}>
                    <Link href="#">
                    <img className={styles.postProfileImg} src="/assets/person/noAvatar.png" alt='User image'/>
                    </Link>
                    <span className={styles.postUserName}>{}</span>
                    <span className={styles.postDate}>{new Date()}</span>
                </div>
                <div className={styles.postTopRight}>
                <MoreVert />    
                </div>
            </div>
            <div className={styles.postCenter}>
                <span className={styles.postContent}>{post?.desc}</span>
                <img className={styles.postImg} src={"post/noCover.png"}  alt="post image" />
            </div>
            <div className={styles.postBottom}>
                <div className={styles.postBottomLeft}>
                    <img className={styles.postLikeIcon} src="/assets/like.png" onClick={likeHandler} alt="Like icon" />
                    <img className={styles.postLikeIcon} src="/assets/heart.png" onClick={likeHandler} alt="Heart icon" />
                    <span className={styles.postLikeCounter}>{} people liked this</span>
                </div>
                <div className={styles.postBottomRight}>
                    <span className={styles.postCommentText}>{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
