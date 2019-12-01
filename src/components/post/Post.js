import React from "react";
import './post.css'
class Post extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="card">
                <a href="#">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">
                                {this.props.description}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    <i className="far fa-user"></i>{this.props._acl.creator}
                                    <i className="fas fa-calendar-alt">{this.props._kmd.lmt}</i>
                                </small>
                            </p>
                        </div>
                </a>
            </div>
        );
    }
}

export default Post