import React from 'react'
import "../Styles/Search.css"

import searchIcon from "../Icons/HeaderIcons/searchIcon.png"



export default function Search() {
    return (
        <div className ="search">
            <img src= {searchIcon} className="search__icon"/>
            <form  className="search__form">
                
                <input type="text" placeholder="Search for ticker, user, or other information" className="search__form__input"/>

            </form>
        </div>
    )
}
