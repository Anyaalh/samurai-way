import s from "../Dialogs.module.css"


export type MessageType = {
    message: string
    id: number
}

export const Message = (props: MessageType) => {
    return (
        <div id={props.id} className={s.message}>{props.message}</div>
    )
}