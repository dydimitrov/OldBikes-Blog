import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {value: ''}
    }

    handleSubmit =  async(event) =>{
        event.preventDefault();
        await this.props.onsubmit(
            this.usernameField.value, this.passwordField.value);
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <MDBContainer fluid>
                    <MDBRow center className="mt-3">
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.handleSubmit}>
                                        <p className="h2 text-center py-4 text-dark">Login</p>
                                        <label
                                            htmlFor="defaultFormCardNameEx"
                                            className="text-dark"
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
                                            className="text-dark"
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