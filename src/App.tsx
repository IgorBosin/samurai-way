import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className="header">
                <img
                    src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>


            </nav>

            <div className="content">
                <div>
                    <img
                        src="https://bicsi-singapore.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2016/11/22100215/Banner_04-1200x160.jpg"
                        alt="img"/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My post
                    <div>
                        New posts
                    </div>
                </div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    );
}

export default App;
