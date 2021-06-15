import React from 'react'
import "../Styles/IndividualNavItems.css"

export default function IndividualNavItems(props) {

    const {key,title,icon,to, current} = props
    return (
        <div className = "navbar__item">
            <div className = "navbar__item__icon">
                {icon}
            </div>
            
            <p className = "navbar__item__title" style={ current=== title ?{color: "white"}:{color: "rgba(255, 255, 255, 0.6)"} }>{title}</p>

        </div>
    )
}
