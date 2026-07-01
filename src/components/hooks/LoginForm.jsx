import { useState } from "react"
import "./Registration.css"

export const LoginForm = () => {
 
    // & STATE
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    // & Handler Methods
    const handleFormSubmit = (e) => {
         e.preventDefault();

         const LoginData = {
            username, password
         }
         console.log(LoginData);
         
    }



    return (
        <section className="login">
            <h1>Login Form</h1>
             <form onSubmit={handleFormSubmit}>
                <label htmlFor="user">Username</label>
                <input name="username" id="user" type="text" placeholder="Enter Username"
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)}
                      
                      required autoComplete="off"/>
                
                <label htmlFor="pass">Password</label>
                <input type="password" name="password" id="pass" placeholder="Enter Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required autoComplete="off"/>
                
              <button type="submit">Login</button>
             </form>
        </section>
        
    )
}