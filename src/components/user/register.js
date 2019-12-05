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
        await this.props.onsubmit(
            this.state.username, this.state.password, this.state.firstName,this.state.lastName);
        this.props.history.push('/')
    }

    render() {
        return (
                <MDBContainer className="card-text text-center">
                    <MDBRow className="mt-3" center middle>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.handleSubmit}>
                                        <h2 className="text-center">Register</h2>
                                        <div className="grey-text">
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