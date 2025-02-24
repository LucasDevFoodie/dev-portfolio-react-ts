import WebBar from "./WebBar";
import MobileBar from "./MobileBar";
import useMediaQuery from "../../hooks/useMediaQuery";

import { MouseEvent, MouseEventHandler } from "react";


export type NavigationProps =  {
    onClick: (e: MouseEvent) => void
}

const Header = () => {

    const handleThemeToggle: MouseEventHandler = (e) => {
        
        console.log('clicked', e)
    }   

    //Adaptative design example. Otherwise managed by CSS module.     
    return(
        useMediaQuery("(min-width: 768px)") ?
        <WebBar props={{onClick:handleThemeToggle}} /> : 
        <MobileBar props={{onClick:handleThemeToggle}} />   
    )
}

export default Header;