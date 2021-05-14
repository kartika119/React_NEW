import React from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import './portfillo.css';
import {Link} from 'react-router-dom';



class portfillo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }

  componentDidMount() {

    axios.get('https://dummyapi.io/data/api/user?limit=10', {
      headers: {
        'App-Id': '608f8b2c642e1a027c510817'
      }
    })

      .then(res => {

        const persons = res.data.data;
        this.setState({ persons })

      });

  }
  render() {
    return (
      <>
        <div className="card-div">

          <CardGroup>
            {this.state.persons.map(person => <>
            <Card style={{ width: '20rem' }}>
           <Card.Img src={person.picture} />
                <Card.Body>
                <Link to={"/"+person.id}><Card.Title>{person.email}</Card.Title>  </Link>
                  <Card.Text>
                    {person.title} {person.firstName}  {person.lastName}
                  </Card.Text>
                </Card.Body>
              </Card>
            



            </>)}
          </CardGroup>
        </div>
      </>
    )
  }
}
export default portfillo;