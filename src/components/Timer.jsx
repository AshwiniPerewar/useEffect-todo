import React,{useState,useEffect} from 'react'

const Timer = () => {

    const[timer,setTimer]=useState(0);
    useEffect(()=>
    {
        const id=setInterval(()=>{
            if(timer>10)
            {
                clearInterval(id);
                setTimer(0);
            }
            else
            {
            setTimer((timer)=>timer+1);
            }
        },1000)

        return()=>
        {
            clearInterval(id);
        }
    },[timer]);

  return (
    <div>Count Down:{timer}</div>
  )
}

export default Timer