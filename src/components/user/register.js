import React, {Component} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


class Register extends Component{
    constructor(props){
        super(props)

        this.state = {value :  ''}
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        //set ajax to api with value
    }

    render() {
        return(
            <>
                <MDBContainer className="card-text text-center">
                    <MDBRow className="mt-3" center middle>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <form>
                                        <h2 className="text-center">Sign up</h2>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Confirm your email"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your password"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn className="btn-success"  type="submit">
                                                Register
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