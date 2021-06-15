import React from 'react'

import "../Styles/SortBy.css"

export default function SortByButton() {


    return (
        <div className="sort__by">
            <p>Sort by: </p>
            <span>This week</span>
            

            <div >
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.25 5.25L9.5 1" stroke="#A2B1C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}
