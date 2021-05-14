import React, { Component } from 'react'

export default class Signin extends Component {
    constructor(){
        super()
        this.state={
            name:"React"
        }
    }

    render() {
        return (
            <div>
             <h6  style={{textAlign:"center",fontSize:"1.5rem"}}>Signin</h6>
            <input type="text" placeholder="username"/><br/>
            <input type="email" placeholder="email"/><br/>
            <input type="number" placeholder="phone no"/><br/>


            <input type="password"  placeholder="password"/><br/>
            <button type="submit" style={{backgroundColor:"blue"}} >signin</button>

         
            </div>
        )
    }
}
