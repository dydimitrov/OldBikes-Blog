import React,{Component} from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import KinveyRequester from "../../KinveyRequester";

class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            category: '',
            description: '',
            creatorId: '',
            date: '',
            title: ''
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        let id = this.props.match.params.id
        KinveyRequester.findPostById(id)
            .then(post => {
                this.setState({isLoaded: true})
                this.setState({id: post._id})
                this.setState({firstName: post.firstName})
                this.setState({lastName: post.lastName})
                this.setState({email: post.email})
                this.setState({category: post.category})
                this.setState({description: post.description})
                this.setState({title: post.title})
                this.setState({creatorId: post._acl.creator})
                this.setState({date: post._kmd.lmt})
            });
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        this.props.onsubmit(this.state.id,this.state.firstName,this.state.lastName,this.state.email,this.state.category,this.state.description,this.state.title)
        this.props.history.push('/')
    };

    changeHandlerTitle = event => {
        event.preventDefault();
        this.setState({title : event.target.value})
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
                        <h2>Edit Post</h2>
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
                                onChange={this.changeHandlerDescription}
                                type="text"
                                id="description"
                                className="form-control"
                                name="description"
                                value={this.state.description}
                                required
                            ></textarea>
                            <div className="invalid-feedback">
                                Your post must be at least 50 symbols.
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                        <MDBBtn color="primary" type="submit">
                            Save post
                        </MDBBtn>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default EditPost;