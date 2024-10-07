import React, {useState} from "react";

import { BsList } from "react-icons/bs";

import './NavBar.css'

function NavBar() {

    let [isDroppedDown, setDropDown] = useState(false);

    const updateDropState = () => {
        setDropDown(prevState =>  !prevState)
    }

    return(
        <div className={"navbar-container"}>
            <h1 className={"project-name"}>K&J Stocks</h1>
            <div className={"dropdown-container"}>
            <BsList className={"dropdown-icon"} onClick={updateDropState} />
            {isDroppedDown && (
                <div className="dropdown-content">
                    <p>Logout</p>
                    <p>Settings</p>
                </div>
            )}
            </div>
        </div>
    );
}

export default NavBar;