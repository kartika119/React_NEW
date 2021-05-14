import React from 'react';
import Navigation from '../EcomWeb/Navigation';
import Linknav from '../EcomWeb/Linksnav';
import Slides from '../EcomWeb/Slides';
import Grid from '../EcomWeb/Grid';
import { Col, Row } from 'react-bootstrap';
import Cardo from '../EcomWeb/Cardo'

export default class Mainpage extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <br/>
                <Linknav />
                <br/>
                <Row>
                    <Col xl={8}>
                        <Slides />
                    </Col>
                    <Col xl={4}>
                        <Cardo />

                    </Col>
                </Row>
                <br />

                <Grid />


            </>
        )
    }
}