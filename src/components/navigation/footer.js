import React from "react";
import { Col, Container, Row, ModalFooter } from "reactstrap";

const Footer = () => {
    return (
        <ModalFooter color="blue" className="font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="6" className="text-center">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            This is our Blog system about old motorcycles. Our prime mission is to connect people who have interests of old bikes and restoration of them.
                        </p>
                    </Col>
                    <Col md="3" className="offset-2">
                        <h5 className="title">Navigation</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/register">Register</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/login">Login</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-1">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="http://www.dydesigns.net"> DY Designs </a>
                </Container>
            </div>
        </ModalFooter>
    );
}

export default Footer;