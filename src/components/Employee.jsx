import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
              < h1>id:{this.props.match.params.employe_id}</h1>
              < h1>name:{this.props.match.params.employe_name}</h1>

            </div>
        )
    }
}
