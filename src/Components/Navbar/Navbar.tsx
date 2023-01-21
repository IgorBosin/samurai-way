import React from "react";
import classes from './Navbar.module.css'

console.log(classes)
function Navbar() {
    return (
        <nav className={classes.nav}>
            <div>
                <a className={classes.item}>Profile</a>
            </div>
            <div>
                {/*<a className="item active">News</a>*/}
                <a className={`${classes.item} ${classes.active}`}>News</a>
            </div>
            <div>
                <a className={classes.item}>Music</a>
            </div>
            <div>
                <a className={classes.item}>Settings</a>
            </div>
        </nav>
    )
}


export default Navbar