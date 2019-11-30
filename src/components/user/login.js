import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {value: ''}
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.usernameField.value, this.passwordField.value);
    }

    render() {
        return (
            <>
                <MDBContainer fluid>
                    <MDBRow center className="mt-3">
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <p className="h2 text-center py-4">Sign in</p>
                                        <label
                                            htmlFor="defaultFormCardNameEx"
                                            className="grey-text font-weight-light"
                                        >
                                            Your username
                                        </label>
                                        <input
                                            type="text"
                                            id="defaultFormCardNameEx"
                                            className="form-control"
                                            ref={e => this.usernameField = e}
                                        />
                                        <br />
                                        <label
                                            htmlFor="defaultFormCardEmailEx"
                                            className="grey-text font-weight-light"
                                        >
                                            Your password
                                        </label>
                                        <input
                                            type="password"
                                            id="defaultFormCardEmailEx"
                                            className="form-control"
                                            ref={e => this.passwordField = e}
                                        />
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn className="btn-success" type="submit">
                                                Login
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