import React from "react";
import './post.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let currentUser = this.props.currentUser
        let id = this.props._id;

        return (
            <div className="card">
                <a href={"/post/single/" + id}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            {this.props.description.substring(0,30)}...
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                <i className="far fa-user"></i>{this.props.firstName} {this.props.lastName}
                                <i className="fas fa-calendar-alt">{this.props._kmd.ect.substring(0,10)}</i>
                            </small>
                        </p>
                    </div>
                </a>
            </div>
        );
    }
}

export default Post