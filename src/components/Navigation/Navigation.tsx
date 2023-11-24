import React from "react";
import s from './Navigation.module.css'

export const Navigation = () =>{
    return (

        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}>
                    <a>Profile</a>
                </li>
                <li className={s.item}>
                    <a>Messages</a>
                </li>
                <li className={s.item}>
                    <a>New</a>
                </li>
                <li className={s.item}>
                    <a>Music</a>
                </li>
                <li className={s.item}>
                    <a>Settings</a>
                </li>
            </ul>
        </nav>
    )
}