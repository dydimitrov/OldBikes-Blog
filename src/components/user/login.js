import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password:''
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

    handleSubmit =  async(event) =>{
        event.preventDefault();
        if (this.state.username.length !== 0 && this.state.password.length !== 0){
            await this.props.onsubmit(
                this.state.username, this.state.password)
                this.props.history.push('/')

        }else{
            this.props.showError("There is some wrong with your credentials.Please fill data again!")
            return
        }
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
                                            value={this.state.username}
                                            type="text"
                                            id="defaultFormCardNameEx"
                                            className="form-control"
                                            onChange={this.handleChangeUsername}
                                        />
                                        <br />
                                        <label
                                            htmlFor="defaultFormCardEmailEx"
                                            className="text-dark"
                                        >
                                            Your password
                                        </label>
                                        <input
                                            value={this.state.password}
                                            type="password"
                                            id="defaultFormCardEmailEx"
                                            className="form-control"
                                            onChange={this.handleChangePassword}
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