import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import login from '../images/login.png';
import Form from '../EcomWeb/Form';







function Openmodal() {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
      //style={{ height: "100vh" }}
      >
        <Button variant="light" onClick={handleShow}>
          Sign In
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Login</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Row>

            <Col lg={6}>
              <img src={login} 
               alt="First"/>
            </Col>
            <Col lg={6}>

              <Form />

            </Col>


          </Row>


        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Openmodal;