import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts(){
   return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={s.posts}>

            <Post message={"Hello? how are you?"} likeCount={1}/>
            <Post message={"It's my first post"} likeCount={4}/>

            </div>

        </div>
   )
}