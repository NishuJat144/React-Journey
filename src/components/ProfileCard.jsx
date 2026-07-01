import { Fragment } from "react";
export const ProfileCard = (props) => 
{
    const {name , age , greeting , children} = props;
    return (
      <>  
      <h2>name : {name} </h2>
      <h2>age : {age}</h2>
      <p>{greeting}</p>
      <div>{children}</div>

      </>
    );
}