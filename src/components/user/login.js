import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {value: ''}
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        //set ajax to api with value
    }

    render() {
        return (
            <>
                <MDBContainer fluid>
                    <MDBRow center className="mt-3">
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <form>
                                        <p className="h2 text-center py-4">Sign in</p>
                                        <label
                                            htmlFor="defaultFormCardNameEx"
                                            className="grey-text font-weight-light"
                                        >
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            id="defaultFormCardNameEx"
                                            className="form-control"
                                        />
                                        <br />
                                        <label
                                            htmlFor="defaultFormCardEmailEx"
                                            className="grey-text font-weight-light"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            id="defaultFormCardEmailEx"
                                            className="form-control"
                                        />
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn className="btn-success" type="submit">
                                                Send
                                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}

export default Register