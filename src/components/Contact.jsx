import React from 'react';

import axios from 'axios';

import{Link} from 'react-router-dom'

export default class contact extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (


    
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            </thead>
            
            <tbody>
            {this.state.persons.map(person=><>
                <tr>
                  <td>{person.id}</td>
                <td>{person.email}</td>
               <Link  to ={"/employeename"+person.name}><td>{person.name}</td></Link>
                <td>{person.phone}</td>
                <td>{person.website}</td>
                </tr>
                </>
                )}
                
            </tbody>
           
         
        </table>

    //   <ul>
    //     { this.state.persons.map(person => <li>{person.name}</li>)}
    //   </ul>
    )
  }
}