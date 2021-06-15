import React,{useState} from 'react'
import "../Styles/NavigationBar.css"
import NavBarItems from "../DataBase/NavBarItems.js"
import logo from "../Icons/NavigationBarIcons/xtradesLogo.jpg"

import IndividualNavItems from "../Components/IndividualNavItems.js"
 
export default function NavigationBar() {

    const [currentItem,setCurrentItem] = useState("Alerts")

    // function changeCurrent(item){
    //     item.preventDefault()
    //     setCurrentItem(item)
    // }
    

    const navBaritems = NavBarItems.map((item,i) =>{
        return(
            <IndividualNavItems key = {i} title = {item.title} icon = {item.icon} to = {item.to}  current= {currentItem}/>
        )
    })

    return (
        <div className = "navBar" >
            <div className = "navBar__logo">
                <img src={logo} />
                
                <h2>Xtrades</h2>
            </div>
            <div className= "navBar__items">
                {navBaritems}
            </div>
            

        </div>
    )
}
