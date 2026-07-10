import { useEffect, useState } from "react";
export const HowNotToFetchApi = () => {

// * This file tells us that always fetch api with the help of useEffect whenever 
// * we have to fetch data ,  it prevents program from the infinite loop problem.    

    // & State and Hooks
    const [apiData , setApiData] = useState([]);

    useEffect(() => {
        //& API Fetching
        fetch("https://jsonplaceholder.typicode.com/posts").
        then((res) => res.json()).
        then((data) => {
            setApiData(data)
        })
        .catch((error)=> console.log(error))
    

    } , [])
    
 

    return (
        <div>
            <ul>
                data 
                {
                    apiData.map((currData)=> {
                        return <li key={currData.id}>{currData.title}</li>
                    })
                }
            </ul>
        </div>
        
    );
}