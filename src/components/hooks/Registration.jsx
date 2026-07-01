import { useState } from "react"
import "./Registration.css"
export const Registration = () => {

    // & States for controlling inputs of form 
    const [firstName , setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("") ;

    // & Handler  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        };
        console.log(formData);
        

    }

   return(
        <>
     <p>Hello, my name is {firstName + lastName}. My email address is {email}  and my phone number is 
        {phoneNumber}</p>
        
        <section>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create the account</p>
            <form onSubmit={handleFormSubmit}>
            <label htmlFor="firstname">First Name  </label>
            <input type="text" name="first" id="firstname" placeholder="Enter First Name"
            value={firstName}  onChange={(event) => setFirstName(event.target.value)} required  />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="last" id="lastname" placeholder="Enter Last Name"
            value={lastName} onChange={(event) => setLastName(event.target.value)} required/>

            <label htmlFor="emailfield">Email</label>
            <input type = "email" id="emailfield"  name="email" placeholder="Enter Email"
            value={email} onChange={(event) => setEmail(event.target.value)} required />

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="password" placeholder="Enter Password" 
            value={password} onChange={(event) => setPassword(event.target.value)} required/>

            <label htmlFor="Phone">Phone Number</label>
            <input type="tel" id="Phone" name="phone" placeholder="Enter Phone Number" 
            value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required/>
           <p>By creating an account you agree to our Terms & Privacy</p>
           <button type="submit">Sign Up</button>
            </form>
         </section>
        </>
    );
}