import React from "react";
import s from './MyPosts.module.css';
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return(
             <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                   <Post message={"Hi!"} likeCount={4}/>
                   <Post message={"It's my first post"} likeCount={6}/>
                </div>
            </div>
    )
}