import React from "react";
import s from "./Profile.module.css"

export function Profile(){
   return (
        <div className={s.content}>
            <div>
                <img alt={''}
                     src={"https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=ais"}/>
            </div>
            <div>ava+description</div>
            <div>My posts</div>
            <div>New posts</div>
            <div className={s.item}>
                <div className={s.item}>post 1</div>
            </div>
            <div>
                <div className={s.item}>post 2</div>
            </div>
        </div>
    )
}