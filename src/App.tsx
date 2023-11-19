import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>

            <header className={'header'}>
                <img alt={""}
                     src={"https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/05/LOGO-r2.jpg?auto=format&q=60&w=2060&h=1545&fit=crop&crop=faces"}/>
            </header>

            <nav className={'nav'}>
                <ul>
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>Messages</a>
                    </li>
                    <li>
                        <a>New</a>
                    </li>
                    <li>
                        <a>Music</a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                </ul>
            </nav>

            <div className={'content'}>

                <img alt={""} src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}/>
                <div>
                    ava + description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default App;
