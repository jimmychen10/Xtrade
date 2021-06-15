import React from 'react'

import "../Styles/IndividualHeaderButtons.css"

export default function IndividualHeaderButtons(props) {

    const {key, img, isThereNotification} = props
    return (
        <a href="#" className="notification">
          
              <img src= {img}/>
          
          {isThereNotification && <span className="badge"></span> }
          
        </a>
    )
}
