import React from 'react'
import addIcon from "../Icons/HeaderIcons/addIcon.png" 

import "../Styles/InvitefriendButton.css"


export default function InvitefriendButton() {
    return (
        <button className = "button__invite"> <img src = {addIcon}/> <p><b>Invite a friend</b></p></button>
    )
}
