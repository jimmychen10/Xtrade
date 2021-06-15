import React from 'react'

import Search from "./Search.js"
import InvitefriendButton from "./InvitefriendButton.js"
import HeaderButtons from "../DataBase/HeaderButtons.js"
import IndividualHeaderButtons from "./IndividualHeaderButtons"

import Jill from "../Icons/Users/Jill.png"

import "../Styles/Header.css"

export default function Header() {

    const buttons = HeaderButtons.map((button,i) =>{
            return(
                <IndividualHeaderButtons key ={i}  img ={button.img} isThereNotification ={button.isThereNotification}/>
            )
    })
    return (
        <div className = "header"> 

            <h1>Alerts</h1>

            <Search/>

            <div className = "header__right">
                <InvitefriendButton/>
                <div className = "header__right_buttons">
                    {buttons}
                </div>
                

                <div className="header__user">
                    <img src = {Jill}/>
                </div>
            </div>



        </div>
    )
}
