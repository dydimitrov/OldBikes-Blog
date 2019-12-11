import React, {Component} from 'react'
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            error:false
        }
    }

    handleChangeUsername = (event) => {
        event.preventDefault();
        this.setState({username: event.target.value})
    }
    handleChangePassword = (event) => {
        event.preventDefault();
        this.setState({password: event.target.value})
    }
    handleChangeFirstName = (event) => {
        event.preventDefault();
        this.setState({firstName: event.target.value})
    }
    handleChangeLastName = (event) => {
        event.preventDefault();
        this.setState({lastName: event.target.value})
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        let isUsernameValid = this.state.username.length > 6
        let isPasswordValid = this.state.password.length > 6
        let isFirstNameValid = this.state.firstName.length !== 0 && this.state.firstName.length > 3
        let isLastNameValid = this.state.lastName.length !== 0 && this.state.lastName.length > 3

        if (isFirstNameValid && isLastNameValid && isPasswordValid && isUsernameValid) {
            await this.props.onsubmit(
                this.state.username, this.state.password, this.state.firstName, this.state.lastName)
                this.props.history.push('/')

        } else {
            this.props.showError("There is some wrong with your credentials.Please fill data again!")
            return
        }
    }

    render() {
        return (
            <MDBContainer className="card-text text-center">
                <MDBRow className="mt-3" center middle>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <h2 className="text-center text-dark">Register</h2>
                                    <div className="text-dark">
                                        <MDBInput
                                            label="Your username"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={this.handleChangeUsername}
                                        />
                                        <MDBInput
                                            label="Your password"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                            onChange={this.handleChangePassword}
                                        />
                                        <MDBInput
                                            label="First Name"
                                            group
                                            type="text"
                                            validate
                                            onChange={this.handleChangeFirstName}
                                        />
                                        <MDBInput
                                            label="Last Name"
                                            group
                                            type="text"
                                            validate
                                            onChange={this.handleChangeLastName}
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn className="btn-success" type="submit">
                                            Register
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Register