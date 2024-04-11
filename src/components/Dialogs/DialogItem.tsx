import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    title: string
    id: string
}

export const DialogItem = ({title, id}: DialogItemType) => {
    let path = `/dialogs/${id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{title}</NavLink>
        </div>
    )
}