import AlertIcon from "../Icons/NavigationBarIcons/AlertIcon.js"
import LeaderboardIcon from "../Icons/NavigationBarIcons/LeaderboardIcon.js"
import XhubIcon from "../Icons/NavigationBarIcons/XhubIcon.js"


const NavBarItems =  [
    {
        title:"Alerts",
        icon:<AlertIcon/>,
        to:"../Pages/Alert.js"
    },
    {
        title:"Leaderboard",
        icon:<LeaderboardIcon/>,
        to:"../Pages/Leaderboard.js"
    },
    {
        title:"Xhub",
        icon:<XhubIcon/>,
        to:"../Pages/Xhub.js"
    }
]

export default NavBarItems