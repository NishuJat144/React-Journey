import { ProfileCard } from "./ProfileCard";
import { Fragment } from "react";
export const Profile =  ()=>
{
   return(
    <>
     <h1>Profile Card Challenge</h1> 
        <ProfileCard
            name = "Alice"
            age = {30}
            // PASSING JSX IN PROPS
            greeting = {
                <div>
                    <strong>Hi Alice , have a wonderful day!</strong>
                </div>
            }
            >
            <p>Hobbies : Reading , Hiking</p>
            <button>Contact</button>
        </ProfileCard>

          <ProfileCard
            name = "Bob"
            age = {25}
            greeting = {
                <div>
                    <strong>Hi Bob , keep up the great work!</strong>
                </div>
            }
            >
            <p>Hobbies : Gaming , Cooking</p>
            <button>Contact</button>
        </ProfileCard>


    </>
     
   );
}