import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const matchQueryList: MediaQueryList = window.matchMedia(query);
        const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
             setMatches(e.matches)
            };
            
            // Check on mount
            if(matchQueryList.matches) setMatches(true)

            matchQueryList.addEventListener('change', handleChange)

            return () => {
                matchQueryList.removeEventListener('change', handleChange)
            }
        
    }, [query])
    
    return matches;
}
