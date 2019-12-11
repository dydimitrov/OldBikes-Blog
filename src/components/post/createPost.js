import React,{Component} from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class PostCreate extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:"",
            firstName: "",
            lastName: "",
            email: "",
            category: "",
            description: ""
        };
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        this.props.onsubmit(this.state.firstName,this.state.lastName,this.state.email,this.state.category,this.state.description,this.state.title)
        this.props.history.push('/')
    };

    changeHandlerTitle = event => {
        event.preventDefault();
        this.setState({title : event.target.value})
    };
    changeHandlerFirstName = event => {
        event.preventDefault();
        this.setState({firstName : event.target.value})
    };
    changeHandlerLastName = event => {
        event.preventDefault();
        this.setState({lastName : event.target.value})
    };
    changeHandlerEmail = event => {
        event.preventDefault();
        this.setState({email : event.target.value})
    };
    changeHandlerCategory = event => {
        event.preventDefault();
        this.setState({category : event.target.value})
    };
    changeHandlerDescription = event => {
        event.preventDefault();
        this.setState({description : event.target.value})
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
                                htmlFor="defaultFormRegisterConfirmEx3"
                                className="grey-text"
                            >
                                First Name
                            </label>
                            <input
                                value={this.state.firstName}
                                onChange={this.changeHandlerFirstName}
                                type="email"
                                id="defaultFormRegisterConfirmEx3"
                                className="form-control"
                                name="firstName"
                                placeholder="First name..."
                            />
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="lastName"
                                className="grey-text"
                            >
                                Last name
                            </label>
                            <input
                                value={this.state.lastName}
                                onChange={this.changeHandlerLastName}
                                type="text"
                                id="lastName"
                                className="form-control"
                                name="lastName"
                                placeholder="Last name..."
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid Name.
                            </div>
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
                                onChange={this.changeHandlerEmail}
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
                                Category
                            </label>
                            <input
                                value={this.state.category}
                                onChange={this.changeHandlerCategory}
                                type="text"
                                id="category"
                                className="form-control"
                                name="category"
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
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="title"
                                className="grey-text"
                            >
                                Title
                            </label>
                            <input
                                value={this.state.title}
                                onChange={this.changeHandlerTitle}
                                type="text"
                                id="title"
                                className="form-control"
                                name="title"
                                placeholder="Title..."
                                required
                            />
                            <div className="invalid-feedback">
                                Your post must be at least 3 symbols.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <label
                                htmlFor="description"
                                className="grey-text"
                            >
                                Description
                            </label>
                            <textarea
                                value={this.state.state}
                                onChange={this.changeHandlerDescription}
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
                            Submit post
                        </MDBBtn>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default PostCreate;