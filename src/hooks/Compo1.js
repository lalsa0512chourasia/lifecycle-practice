import React, { Component } from 'react'
import Compo2 from './Compo2'

class Compo1 extends Component {

constructor(){
    super()
    this.state={
        name:"lalsa",
        age:22,
        newname:"John"
    }
}


  render() {
    return (
      <div> 
           My name is {this.state}
           {/* <button onClick={()=>{this.setState}}>change name</button> */}
           <Compo2 name={this.state.newname}/>
      </div>
    )
  }
}

export default Compo1