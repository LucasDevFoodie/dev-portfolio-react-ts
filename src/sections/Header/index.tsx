import WebBar from "./WebBar";
import MobileBar from "./MobileBar";
import {useMediaQuery} from "../../hooks/useMediaQuery";
import { useTheme } from "../../hooks/useTheme";

export const Header = () => {
    const [theme, handleChange] = useTheme('dark');

    //Adaptative design example. Otherwise managed by CSS module.     
    return(
        useMediaQuery("(min-width: 768px)") ?
        <WebBar handleThemeToggle={handleChange} /> : 
        <MobileBar handleThemeToggle={handleChange} />   
    )
}

