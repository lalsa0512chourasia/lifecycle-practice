import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

constructor(){
    super()
    this.state={
        name:"lalsa",
        age:22,
        newname:"John"
    }
}
changename(){
    this.setState({
        name:"John",
        age: 22
    })
}


  render() {
    return (
      <div> 
           My name is {this.state}
           <button onClick={()=>{this.changename}}>change name</button>
           <Child name={this.state.newname}/>
      </div>
    )
  }
}

export default Parent