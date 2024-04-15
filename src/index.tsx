import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostsDataType ={
    id: number
    message: string
    likeCount: number
}

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

let dialogsData: DialogsDataType[] = [
    {id: 1, name: "Ann"},
    {id: 2, name: "Nadya"},
    {id: 3, name: "Olga"},
    {id: 4, name: "Mikhail"},
    {id: 5, name: "Ilya"},
    {id: 6, name: "Daniil"},
]

let messagesData: MessagesDataType[] = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Heeeey"},
    {id: 5, message: "Hi"}
]

let postsData: PostsDataType[] = [
    {id: 1, message: "Hello? how are you?", likeCount: 1},
    {id: 4, message: `It's my first post`, likeCount: 4}
]

ReactDOM.render(
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>,
  document.getElementById('root')
);