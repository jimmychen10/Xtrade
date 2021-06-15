import React from 'react'
import NavigationBar from "./Components/NavigationBar.js"
import Header from "./Components/Header.js"
import Alerts from "./Pages/Alerts.js"

import "./App.css"

export default function App() {
  return (
    <div className="app">
      <NavigationBar/>

      <div className="right">
        <Header/>

        <div className=  "content">

            <Alerts/>

        </div>

      </div>


    </div>
  )
}
