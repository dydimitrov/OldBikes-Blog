import React,{Component} from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class PostCreate extends Component {
    constructor(props){
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
            category: "",
            description: ""
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                >
                    <MDBRow center className="mt-2">
                        <h2>Create Post</h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterNameEx"
                                className="grey-text"
                            >
                                First name
                            </label>
                            <input
                                value={this.state.fname}
                                name="fname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterNameEx"
                                className="form-control"
                                placeholder="First name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterEmailEx2"
                                className="grey-text"
                            >
                                Last name
                            </label>
                            <input
                                value={this.state.lname}
                                name="lname"
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterEmailEx2"
                                className="form-control"
                                placeholder="Last name"
                                required
                            />
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text"
                            >
                                Email
                            </label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="email"
                                placeholder="Your Email address"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="category"
                                className="grey-text"
                            >
                                City
                            </label>
                            <input
                                value={this.state.category}
                                onChange={this.changeHandler}
                                type="text"
                                id="category"
                                className="form-control"
                                name="city"
                                placeholder="Category..."
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid Category.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="12" className="mb-3">
                            <label
                                htmlFor="description"
                                className="grey-text"
                            >
                                State
                            </label>
                            <textarea
                                value={this.state.state}
                                onChange={this.changeHandler}
                                type="text"
                                id="description"
                                className="form-control"
                                name="description"
                                placeholder="Description..."
                                required
                            />
                            <div className="invalid-feedback">
                                Your post must be at least 50 symbols.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBBtn color="primary" type="submit">
                            Submit Form
                        </MDBBtn>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default PostCreate;