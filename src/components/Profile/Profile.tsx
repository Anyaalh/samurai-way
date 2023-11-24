import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./Posts/MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>

            <img alt={""} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}/>
            <div>
                ava + description
            </div>

            <MyPosts/>
        </div>
    )
}