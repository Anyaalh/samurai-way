import s from "./Dialogs.module.css";


type MessageType = {
    message: string
}

export const Message = ({message}: MessageType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}