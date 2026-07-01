import { useState } from "react";
import "./hooks.css"
const ShortCircuit = () => {

    // & STATE 
    const [isLoggedIn , setIsLoggedIn] = useState(true)
    const [user , setUser] = useState("")

    return(
        <section>
            <h1>Welcome to the ShortCircuit Evaluation!</h1>

            {/* Conditional Rendering */}
          {  isLoggedIn &&  <p>You are logged in!</p> }

        <p>  {user ? `Hello ${user}` : "Plz Log in!"} </p>

            <div>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => setUser("Yogesh Choudhary")}>Set User</button>
                <button onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    );
};

export default ShortCircuit ; 