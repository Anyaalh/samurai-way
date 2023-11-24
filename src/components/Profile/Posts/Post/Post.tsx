import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likeCount:number
}

export const Post: React.FC<PostType> = (props) => {
    return (

        <div className={s.item}>
            <img alt={''} src={'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'}/>
            {props.message}
            <div>
                <button>like</button>
                <span>Like counts: {props.likeCount}</span>
            </div>

        </div>

    )
}