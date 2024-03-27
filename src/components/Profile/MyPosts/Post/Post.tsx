import React from "react";
import s from "./Post.module.css"

export function Post(){
   return (
       <div className={s.item}>
           <img alt={''}
                src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg'}/>
           post 1
           <button>like</button>
       </div>
   )
}