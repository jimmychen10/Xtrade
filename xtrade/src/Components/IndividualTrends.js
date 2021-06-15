import React from 'react'

import "../Styles/Content/Alerts/IndividualTrends.css"

export default function IndividualTrends(props) {

    const {key, imgLogo, shortName, compName, graph, alerts, percentage, market} = props

    return (
        <div className = "trend__card">
            
            <div className = "trend__card__top"> 
                <div className = "trend__card__top__info">
                    <div className = "trend__card__top__img">
                        <img src ={imgLogo}/>
                    </div>
                    <div className = "trend__card__top__name">
                        <p>{shortName}</p>
                        <p style={{color:"#A2B1C3"}}>{compName}</p>

                    </div>
                </div>

                <div>
                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7423 3C9.27687 3 9.71019 2.5523 9.71019 2C9.71019 1.4477 9.27687 1 8.7423 1C8.20774 1 7.77441 1.4477 7.77441 2C7.77441 2.5523 8.20774 3 8.7423 3Z" stroke="#C1C7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.5177 3C16.0523 3 16.4856 2.5523 16.4856 2C16.4856 1.4477 16.0523 1 15.5177 1C14.9831 1 14.5498 1.4477 14.5498 2C14.5498 2.5523 14.9831 3 15.5177 3Z" stroke="#C1C7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.96789 3C2.50244 3 2.93578 2.5523 2.93578 2C2.93578 1.4477 2.50244 1 1.96789 1C1.43334 1 1 1.4477 1 2C1 2.5523 1.43334 3 1.96789 3Z" stroke="#C1C7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>


            <div className= "trend__card__graph">
                <img src ={graph}/>
            </div>
            
            <div className = "trend__card__bottom"> 
                <h3> {alerts} alerts</h3>

                <p >
                    <span className = { market ==="bullish" ? "trend__card__bottom__green__percent": "trend__card__bottom__red__percent" }>{percentage} </span>
                    {market}
                </p> 
            </div>

        </div>
    )
}
