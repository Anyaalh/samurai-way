import React from "react";
import s from './Header.module.css';

export const Header = () =>{
    return (
            <header className={s.header}>
                <img alt={""}
                     src={"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/05/LOGO-r2.jpg?auto=format&q=60&w=2060&h=1545&fit=crop&crop=faces"}/>
            </header>
    )
}