import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem title="Ann" id="1"/>
                <DialogItem title="Nadya" id="2"/>
                <DialogItem title="Olga" id="3"/>
                <DialogItem title="Mikhail" id="4"/>
                <DialogItem title="Ilya" id="5"/>
                <DialogItem title="Daniil" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="Yo"/>
                <Message message="Heeeey"/>
                <Message message="Hi"/>
            </div>

        </div>
    )
}