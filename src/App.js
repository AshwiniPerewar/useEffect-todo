import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios'
// import Timer from './components/Timer';
// import Stopwatch from './components/stopwatch';
function App() {

  const[todos,setTodos]=useState([]);
  const[newTodo,setNewTodo]=useState("");
    const[page,setPage]=useState(1);
    const[totalCount,setTotalCount]=useState(0);
    const[limit,setLimit]=useState(0);
   const saveInfo=()=>
   {
     fetch(`http://localhost:3004/todos`,{
       method:"POST",
       headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify({
        text:newTodo,
        isCompleted:false,
    }),
     })
     .then((r)=>r.json())
     .then((d)=>setTodos([...todos,d]));
   }

    useEffect(()=>{

       axios.get(`http://localhost:3004/todos?_page=${page}&_limit=${limit}`)
       .then((r)=>
      {
        console.log(r);
        setTodos(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      })
    },[page,limit])


  return (
    <div className="App">
     
     <div>
       <input value={newTodo} onChange={({target})=>setNewTodo(target.value)}></input>
       <button onClick={saveInfo}>Save</button>
     </div>
        <button disabled={page<=1} onClick={()=>{
         
            setPage(page-1);
          
        }}>
         {""}{"<"}{""}
        </button>
        <select onChange={(e)=>setLimit(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
        </select>
        <button disabled={totalCount<page*5} onClick={()=>{
          setPage(page+1);
         
        }}>
         {""}{">"}{""}
        </button>
        {todos.map((todo)=>
        (
            <div key={todo.id} className="todo">{todo.id}:{todo.text}
            </div>
        ))}
        {/* <Timer/>
        <Stopwatch/> */}
    </div>
  );
}

export default App;
