import { useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";

//Escape hatch for themes coupled with CSS Rules. Improvement requires
//pinpoint elements affected by theme swap.
//Todo: Refactor to useContext
export type Theme = 'dark' | 'light'

export const useTheme = (initialTheme:Theme): [ string, () => void ] => {
    
    const [theme, setTheme] = useLocalStorage<Theme>('theme', initialTheme)
    
    const handleChange = () => theme === 'light' ?
    setTheme('dark') :
    setTheme('light');
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])
    
    return [theme, handleChange]
}

