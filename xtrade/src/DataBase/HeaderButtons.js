import notificationIcon from "../Icons/HeaderIcons/notificationIcon.png" 
import questionIcon from "../Icons/HeaderIcons/questionIcon.png" 
import settingIcon from "../Icons/HeaderIcons/settingIcon.png" 

const HeaderButtons = [
    {
        img: notificationIcon,
        isThereNotification: true
    },
    {
        img: questionIcon,
        isThereNotification: false
    },
    {
        img: settingIcon,
        isThereNotification: false
    },
]


export default HeaderButtons