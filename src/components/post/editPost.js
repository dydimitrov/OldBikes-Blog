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
            title: '',
            image:''
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
                this.setState({image: post.image})
            });
    }

    submitHandler = event => {
        event.preventDefault()

        let isTitleValid = this.state.title.length !== 0
        let isFirstNameValid = this.state.firstName.length !== 0
        let isLastNameValid = this.state.lastName.length !== 0
        let isEmailValid = this.state.email.length !== 0
        let isCayegoryValid = this.state.category.length !== 0
        let isDescriptionValid = this.state.description.length !== 0

        if(isTitleValid && isFirstNameValid && isLastNameValid && isEmailValid && isCayegoryValid && isDescriptionValid) {
            this.props.onsubmit(this.state.id, this.state.firstName, this.state.lastName, this.state.email, this.state.category, this.state.description, this.state.title, this.state.image)
            this.props.history.push('/')
        }else{
            this.props.showError("All fields must have at least one symbol.")
            return
        }

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

    uploadWidget = () => {
        window.cloudinary.createUploadWidget(
            {
                cloudName: "dydimitrov",
                uploadPreset: "reactBlog"
            },
            (error, result) => {

                if (result && result.event === "success") {
                    debugger
                    this.setState({
                        image: `https://res.cloudinary.com/dydimitrov/image/upload/${result.info.path}`, uploaded: true
                    });
                }
            }
        ).open()
    }

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
                        <MDBCol md="6" className="mb-3">
                            <MDBBtn color="success" onClick={() => this.uploadWidget()}>
                                Upload Photo
                            </MDBBtn>
                            <label> You can upload ONE image for more clearity.</label>
                        </MDBCol>
                        <MDBCol md="6" className="mb-3">
                            <MDBBtn color="primary" type="submit">
                                Save post
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>
        );
    }
}

export default EditPost;