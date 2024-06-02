import { useEffect, useState } from "react";

function Datetime() {
    const [time,setTime]=useState(new Date())
    
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }

    },[])

    
   return <p>
       This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
   </p>
   
    
   

}
export default Datetime;