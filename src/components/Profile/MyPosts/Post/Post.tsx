import React from "react";
import s from "./Post.module.css"

type PostType = {
    message: string
    likeCount: number
}

export function Post({likeCount, message}: PostType) {
    return (
        <div className={s.item}>
            <img alt={''}
                 src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg'}/>
            {message}
            <button>{`like: ${likeCount}`}</button>
        </div>
    )
}