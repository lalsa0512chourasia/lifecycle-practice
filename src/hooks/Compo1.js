import React from 'react'         //default imported
import { useState } from 'react'  //named imported

const Compo1 = () => {

  const [name, setName] = useState("lalsa")
  const [user, setUser] = useState({ name: "John", age: 12 })
  const [count, setCount] = useState(0)
  // returns a state variable and a function using which you can update the state value. 
  //becoz we do not have setState function in functional components, also it will take the initial value of state variable.

  // arrow function  //updateState is a variable whose value is equal to function
  const updateState = () => {
    setName("Chourasia")
  }

  // named functions: variable whose value is equal to a function 
  // const updateState = function(){
  // setName("Chourasia")
  // }


  const changeObjStatesAge = () => {
    // setUser((prevState) => ({
    //   ...user, age: 40, name: "krish"
    // }))

    setUser((prevState) => {
      return ({
        ...user, age: 40
      })
    })
  }

  const changeObjStatesName = () => {
    setUser((prevState) => ({
      ...user, name: "krish"
    }))
  }


  return (
    <div>

      <h1>Understanding HOOKS </h1>
      <h2>useState,useEffect and useContext</h2>
      <h2>useReducer, usecallback, useMemo, Memo, useRef</h2>

      <h1>state variable name : {name}</h1>
      <button onClick={updateState}>Clickk to update the State variables using separate arrow function</button>

      {/*  if we have multiple statements then we have to write {()=>{}}  , if we have single statement then write setName*/}
      <button onClick={()=> setName("Name change")}>Click to update the state variable using arrow function</button>  

      <p>count variable :- {count}</p>
      <button onClick={()=> setCount (prevState=>prevState+1)}>Update state count variable by using prev state</button>

      <p>State as an object {user.name}</p>
      <p>State as an object {user.age}</p>
       
      <button onClick={changeObjStatesName}>change state variable :- Name</button>
      <button onClick={changeObjStatesAge}>change state variable :- Age</button>
    </div>
  )
}

export default Compo1
//useState : definition, structure
//how to use the state variable in DOM
//update the state variable ->(2 ways to update the state variables) by creating a separate function and by writing in the same line(Callback function that we write in the same line)
//prevState concept
// This prevstate is required when yo want to use the initial value when you are updating the new State variable value.
// Redux for interview purpose prepare,usecallback, useMemo, Memo, useRef
//Hooks is a part of react library itself , Hooks is a concept which came inside functional components
// all the HOOkS will be named imported