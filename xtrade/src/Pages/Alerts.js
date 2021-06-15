import React from 'react'
import TrendingTickers from "../Components/TrendingTickers"
import RecentAlerts from "../Components/RecentAlerts"


export default function Alerts() {
    return (
        <div style={{width:"100%"}}>
            <TrendingTickers/>
            <RecentAlerts/>
        </div>
    )
}
