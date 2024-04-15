import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsDataType} from "../Profile";

// type PostsDataType ={
//     id: number
//     message: string
//     likeCount: number
// }
type MyPostsType = {
    posts: PostsDataType
}

export function MyPosts({posts}: MyPostsType) {
    // let postsData: PostsDataType[] = [
    //     {id: 1, message: "Hello? how are you?", likeCount: 1},
    //     {id: 4, message: `It's my first post`, likeCount: 4}
    // ]
    return (
        <div className={s.postBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts.map(el=><Post message={el.message} likeCount={el.likeCount} id={el.id}/>)}
                       </div>

        </div>
    )
}