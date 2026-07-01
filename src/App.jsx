// *  JSX , COMPONENT , DYNAMIC JSX , JSX Conditionals(ternary , if-else , AND/OR Operator)
// * Looping in JSX


import NetflixSeries from "./components/NetflixSeries"
// import "./components/Netflix.css"
import "./components/Netflix.module.css"
import {Fragment} from "react";
export const App = () => {
    return(
         <section className="container">
            <h1 className="card-heading">List of Best Netflix Series </h1>
         <NetflixSeries/>;
         </section>
    );  
};



