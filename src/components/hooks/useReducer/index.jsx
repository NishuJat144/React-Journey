import { useReducer} from "react"

export const ReducerComponent = () => {

    // * useState Hook
    // const [count , setCount] = useState(0);

    const initialState = {
        count :0 ,
        inc : 2 ,
        dec : 2 ,
    }

    // & useReducer Hook
    // * reducer() function
    const reducer = (state , action) => {
        console.log(state , action);
      /*
        if(action.type === "INCREMENT"){
            return state + 1 ;
        }
        if(action.type === "DECREMENT"){
            return state - 1 ;
        }
        if(action.type === "RESET"){
            return state = 0;
        }
     */

        // * Improve code by using switch statement
        switch(action.type){
            case "INCREMENT" :
                return {...state ,count : state.count + 1};
            
            case "DECREMENT" :
                return {...state ,count : state.count - 1} ;
            
            case "RESET" :
                return {...state ,count : 0};
            
            case "INC" :
                return {...state , inc : state.inc + 2} ;

            case "DEC" :
                return {...state ,dec : state.dec - 2};    
            default :
               return state;
        }
    };

    const [state , dispatch] = useReducer(reducer , initialState);
    // console.log(useReducer(reducer , 0));
    

    return (
        <>
        <div className="p-4 h-lvh flex flex-col justify-center items-center">
            <h1>{state.inc} | {state.dec} |{state.count}</h1>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=> dispatch({type:"DECREMENT"})}>Decrement</button>
            <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
            <button onClick={()=> dispatch({type:"INC"})}>Increase By two </button>
            <button onClick={()=> dispatch({type:"DEC"})}>Decrease By two</button>
        </div>
        </>
    )
}