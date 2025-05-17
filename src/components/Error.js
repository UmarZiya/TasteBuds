import { use } from "react";
import { useRouteError } from "react-router-dom";


const Error=()=>{
    let err=useRouteError();
    
    return (
        <div>
            <h1>Oops!!!</h1>
            <h1>Something Went Wrong!!!</h1>
            <h2>{err.status} : {err.statusText}</h2>

        </div>
    )
}

export default Error;