import React from 'react'
import KinveyRequester from '../../KinveyRequester'
import Post from '../post/Post'
import Pagination from "../../utilities/Pagination";

class PrivateHome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            pageOfItems: [],
            currentPage:1,
            postPerPage:9
        };
    }

    paginate = (pageNumber) => {
        this.setState({currentPage:pageNumber})
        this.getData()
    };

    getCurrentPosts = (items) =>{
        const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
        const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
        this.setState({pageOfItems: currentPosts})
    }

    getData(){
        KinveyRequester.findAllPosts()
            .then(response => {
                this.getCurrentPosts(response)
                this.setState({data:response})
            })

    }

    componentDidMount(){
        this.getData();
    }

    render() {
        return(
            <div>
                <h2>All Posts</h2>
                <div className="container mt-4">
                    <div className="card-columns">
                {this.state.pageOfItems !== '' ? this.state.pageOfItems.map(post => (
                            <Post {...post} />
                )) : (<div id="loadingBox" className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>)}
                    </div>
                <Pagination paginate={this.paginate} postsPerPage={this.state.postPerPage} totalPosts={this.state.data.length}/>
                </div>
            </div>
        )
    }
}

export default PrivateHome