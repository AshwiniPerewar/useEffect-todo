import React,{useRef,useState} from 'react'

const Stopwatch = () => {

    const[watch,setWatch]=useState(0);
    const timerid=useRef(null);
    
    const start=()=>
    {
        if(!timerid.current)
        {
       let id= setInterval(()=>{
           setWatch((prev)=>prev+1)
       },1000)
       timerid.current(id);
    }
    }
    const reset=()=>
    {
        clearInterval(timerid.current);
        setWatch(0);
        timerid.current=null;
    }
    const pause=()=>
    {
        clearInterval(timerid.current);
        timerid.current=null;
    }

  return (
    <div>stopwatch
        <div>{watch}</div>
    <button onClick={start}>start</button>
    <button onClick={pause}>pause</button>
    <button onClick={reset}>Reset</button>
    
    </div>
  )
}

export default Stopwatch