import React from "react";
import { Col, Container, Row, ModalFooter } from "reactstrap";
import { MDBNavLink } from "mdbreact";
const Footer = () => {
    return (
        <ModalFooter color="blue" className="footer font-small pt-4 mt-4 text-light">
            <Container className="text-center text-md-left mt-4">
                <Row>
                    <Col md="6" className="text-center">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            This is our Blog system about old motorcycles. Our prime mission is to connect people who have interests of old bikes and restoration of them.
                        </p>
                    </Col>
                    <Col md="3" className="offset-2 text-center">
                        <h5 className="title">Navigation</h5>
                        <ul>
                            <li className="list-unstyled">
                                <MDBNavLink to="/">Home</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="/register">Register</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="/login">Login</MDBNavLink>
                            </li>
                            <li className="list-unstyled">
                                <MDBNavLink to="/about">About</MDBNavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-1">
                <Container fluid className="text-center">
                    &copy; {new Date().getFullYear()} Copyright: <a href="http://www.dydesigns.net"> DY Designs </a>
                </Container>
            </div>
        </ModalFooter>
    );
}

export default Footer;