import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import pic1 from '../images/pic1.jpg'

export default class Cardo extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Img src={pic1}/>
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        hello 
                    </Card.Text>
                    </Card.Body>

                    

                </Card>
                
            </div>
        )
    }
}
