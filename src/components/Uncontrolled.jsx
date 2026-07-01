import "./hooks/hooks.css"
// & Uncontrolled Components
export const UncontrolledComponent = () => {

    // * Handler to handle form Submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const dataValue = document.querySelector("#inputName").value;
        console.log(dataValue);
        
    }

    return (
        <section>
            <h1>Uncontrolled Component</h1>
         
            <div className="step">
            <form onSubmit = {handleSubmit}>
                    
            <label>Name : 
            <input type="text" id="inputName" name="name" />
             </label> 
            <button type = "submit" className="btn">Submit</button>
            </form>
            </div>
        </section>
    )
}