import { useState } from "react";
import "./EV.css"

/* const users = [
         {name : "Alice" , age:25},
         {name : "Bob" , age: 30},
         {name : "Charlie" , age : 35},
         {name : "Angles" , age : 45},
        ]
*/
export const DerivedState = () => {

    //* STATE HOOK
    const [users , setUsers] = useState([
         {name : "Alice" , age:25},
         {name : "Bob" , age: 30},
         {name : "Charlie" , age : 35},
         {name : "Angles" , age : 45},
    ])

    // * Derived State : count
    console.log(users);
    const userCount = users.length  ;
    
    //* Derived State : Average of Users
     const averageAge = users.reduce((accum , currElem) => accum + currElem.age ,0)/userCount;

    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((currElem , index)=> {
                        return (
                         <li key={index}>
                            {currElem.name} - {currElem.age} years old
                         </li>);
                       }
                    )
                }
            </ul>

            <p>Total Users : {userCount}</p>
            <p>Average age of Users : {averageAge}</p>

        </div>
      );
};