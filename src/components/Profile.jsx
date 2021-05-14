import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        
        console.log(this.props);


        return (
            <div>
               <h1>id:{this.props.match.params.profile_id}</h1>


            </div>
        )
    }
}
