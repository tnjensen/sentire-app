import {h, Fragments} from 'start-dom-jsx';
import { baseUrl } from '../common/settings';
import { document } from 'postcss';

export default() => {

    function likeHandler(){

    }

    function getPosts(){
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE1MiwibmFtZSI6IndjdjlMMXQ3SjFaSW5JcTlXUnJnIiwiZW1haWwiOiJ0aG9qZW44NDQ4MEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8zNGJmN2JlYmE2YTFjZDYyMTIzZmZlNDk2Nzc5ZmIxOC5qcGciLCJiYW5uZXIiOiJodHRwczovL3d3dy50bmplbnNlbi5jb20iLCJpYXQiOjE2OTg2OTAxMDB9.H4sr7eXMe0FdpU3p_DKlA5bTJwE49hvH-O4gFtkGQnA";
        const url = baseUrl + "posts";
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
                }
        }
        fetch(url, options)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let posts = data;
            let item = "";
            console.log(posts);
            for(let i = 0; i < posts.length; i++){
                item += `
                <li>{posts[i].title}</li>
                    <li>{posts[i].created}</li>
                    <li>{posts[i].body}</li>
                    <li>{posts[i].media}</li>
                `
            }
           return item;
        })
        
        .catch(function(error){
            console.log(error);
        })    

    }
    getPosts();
    return (
    <div class="post">
        <div class="wrapper">
            <div class="postTop">
                <div class="postTopLeft">
                    <img class="postProfileImg" src="/assets/noAvatar.png" alt='User image'/>
                    <span class="postUserName"></span>
                    <span class="postDate"></span>
                </div>
                <div class="postTopRight">
                </div>
            </div>
            <div class="postCenter">
                <span class="postContent">
                    
                </span>
                <img class="postImg" src="assets/noCover.png"  alt="post image" />
            </div>
            <div class="postBottom">
                <div class="postBottomLeft">
                    <img class="postLikeIcon" src="/assets/like.png" onClick={likeHandler} alt="Like icon" />
                    <img class="postLikeIcon" src="/assets/heart.png" onClick={likeHandler} alt="Heart icon" />
                    <span class="postLikeCounter">people liked this</span>
                </div>
                <div className="postBottomRight">
                    <span class="postCommentText">comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
