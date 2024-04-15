import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsDataType} from "./index";

type AppType = {
    posts: PostsDataType
}

function App({posts}: AppType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    {/*<Route path="/profile" component={Profile}/>*/}
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    {/*<Route path="/news" component={News}/>*/}
                    {/*<Route path="/music" component={Music}/>*/}
                    {/*<Route path="/settings" component={Settings}/>*/}

                    <Route path="/profile" render={ ()=> <Profile posts={posts}/>  }/>
                    <Route path="/dialogs" render={ ()=> <Dialogs />  }/>
                    <Route path="/news" render={ ()=> <News />  }/>
                    <Route path="/music" render={ ()=> <Music />  }/>
                    <Route path="/settings" render={ ()=> <Settings />  }/>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
