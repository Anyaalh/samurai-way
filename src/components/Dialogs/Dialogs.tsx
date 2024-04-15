import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";



type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}
type DialogsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}
export const Dialogs = ({dialogs, messages}: DialogsType) => {
    //
    // let dislogsData: DialogsDataType[] = [
    //     {id: 1, name: "Ann"},
    //     {id: 2, name: "Nadya"},
    //     {id: 3, name: "Olga"},
    //     {id: 4, name: "Mikhail"},
    //     {id: 5, name: "Ilya"},
    //     {id: 6, name: "Daniil"},
    // ]
    // let messagesData: MessagesDataType[] = [
    //     {id: 1, message: "Hi"},
    //     {id: 2, message: "Hello"},
    //     {id: 3, message: "Yo"},
    //     {id: 4, message: "Heeeey"},
    //     {id: 5, message: "Hi"}
    // ]

    return (

        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                {dialogs.map(el => <DialogItem title={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {messages.map(el => <Message id={el.id} message={el.message}/>)}
            </div>

        </div>
    )
}