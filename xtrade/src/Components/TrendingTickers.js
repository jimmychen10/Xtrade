import React from 'react'

import SortByButton from "./SortByButton.js"
import IndividualTrends from "./IndividualTrends.js"

import "../Styles/Content/Alerts/TrendingTickers.css"

import Trendings from '../DataBase/Trending.js'

export default function TrendingTickers() {

    const trends = Trendings.map((trendItem, i)=>{
        return(
            <IndividualTrends 
                key = {i} 
                imgLogo = {trendItem.imgLogo} 
                shortName = {trendItem.shortName}
                compName = {trendItem.compName} 
                graph = {trendItem.graph}
                alerts = {trendItem.alerts}
                percentage = {trendItem.percentage}
                market = {trendItem.market}
                />
        )
    })

    return (
        <div className="trending__tickers">
            <div className="trending__tickers__top">

                <div className="trending__tickers__title">
                    <h3>Trending tickers</h3>
                    <div className="trending__tickers__button">
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5.25 5.25L9.5 1" stroke="#435274" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>


                <SortByButton/>
                
            </div>

            <div  className="trending__tickers_trends">
                {trends}
            </div>
            
        </div>
    )
}
