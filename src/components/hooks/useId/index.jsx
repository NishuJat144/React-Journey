import { useId } from "react"

export const UseId = () => {

    //  const usernameId = useId();
    //  const emailId = useId();


    // return (
    //     <form>
    //         <div>
    //             <label htmlFor={usernameId}>Username</label>
    //             <input type="text" name="name" id={usernameId} />
    //         </div>
    //         <div>
    //             <label htmlFor= {emailId}>Email</label>
    //             <input type="email" name="email" id= {emailId}/>
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form>
    // )



    // * USE DRY PRINCIPLE

    const id  = useId();

     return (
        <form>
            <div>
                <label htmlFor={id + "usernameId"}>Username</label>
                <input type="text" name="name" id={id + "usernameId"} />
            </div>
            <div>
                <label htmlFor= {id + "emailId"}>Email</label>
                <input type="email" name="email" id= {id + "emailId"}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}