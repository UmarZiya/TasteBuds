
import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [Status,setStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setStatus(true);
        });
        window.addEventListener("offline",()=>{
            setStatus(false);
        });
    },[])

    return Status;
}

export default useOnlineStatus;