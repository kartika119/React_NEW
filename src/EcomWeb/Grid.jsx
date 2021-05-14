import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';





export default class Grid extends Component {


    render() {


        return (
            <div>

                <Row>
                    <Col lg={4}><img src={pic1}
                        alt="First"
                        style={{ width: "100%", height: "10rem" }}
                    /></Col>
                    <Col lg={4}><img src={pic2}
                        alt="image2"
                        style={{ width: "100%", height: "10rem" }}
                    /></Col>
                    <Col lg={4}><img src={pic3}
                        alt="image3" style={{
                            width: "100%",
                            height: "10rem"
                        }} /></Col>
                </Row>



            </div>
        )
    }
}
