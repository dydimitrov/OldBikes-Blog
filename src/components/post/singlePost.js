import React from 'react'
import './singlePost.css'
import KinveyRequester from "../../KinveyRequester";
import ReactAvatar from "react-avatar";

class SinglePost extends React.Component {
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
            isLoaded: false,
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

    render() {
        const {isLoaded,
            id,
            firstName,
            lastName,
            email,
            category,
            description,
            creatorId,
            date,
            title} = this.state;
            let isAuthor = creatorId === this.props.userId
        if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="post-single" >
                    <div className="card-header font-weight-bold">
                        <span>{title}</span>
                    </div>
                    <div className="card-body">
                        <div className="media d-block d-md-flex mt-3">
                            <p><ReactAvatar round name={firstName +" " + lastName}/></p>
                            <div className="media-body text-center text-md-left ml-md-3 ml-0">
                                <h5 className="mt-0 font-weight-bold">{firstName} {lastName}</h5>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="text-center btn-box">
                        <a className="btn btn-success " href={"/comment/" + id}>Comment</a>
                        {
                            isAuthor ? (
                                <>
                                    <a className="btn btn-primary" href={"/post/edit/" + id}>Edit</a>
                                <a className="btn btn-danger" href={"/post/delete/" + id}>Delete</a>
                                </>) : ''
                        }
                    </div>
                </div>
            )
        }
    }
}

export default SinglePost