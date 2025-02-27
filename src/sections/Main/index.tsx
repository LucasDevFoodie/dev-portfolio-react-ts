import {Hero} from "./Hero";
import { About } from "./About";
import { Featured } from "./Featured";

export const Main = ():React.JSX.Element => {
    return(
        <main>
            <Hero></Hero>
            <About></About>
            <Featured></Featured>
        </main>
    )
}

