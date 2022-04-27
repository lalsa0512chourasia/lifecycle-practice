import React, {useEffect,useState}  from 'react'

const TestUseEffect =()=>{

const [a, setA]= useState('ABC');
const [b,setB] = useState("XYZ")

//ComponentDidMount and ComponentdidUpdate
useEffect (()=>{
    console.log("Hello useEffect hook");
})

//ComponentDidMount
useEffect (()=>{
    console.log("Hello useEffect hook");
},[])

//ComponentWillUnmount
useEffect(()=>{
    console.log("inside useEffect Hook ");

   return function cleanup(){
       console.log("useEffect Hooks inside CleanUp function");
   }
})

    return(
        <div>
           <h1>This is useEffect Explaination</h1>
           <p>Value of a state value = {a}</p>
           <p>Value of b state value = {b}</p>
           <button onClick={()=> setA("PQR")}>Update a state value</button>
           <button onClick={()=> setB("MNO")}>Update b state value</button>
        </div>
    )
}

export default TestUseEffect


// useEffect
// alternative of Lifecycle methods 
//ComponentDidMount, ComponentDidUpdate, ComponentwillUnmount

//hooks which