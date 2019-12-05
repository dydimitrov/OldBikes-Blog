import React, {Component} from 'react';
import LoggedIn from "./privateHome";
import NotLoggedIn from "./publicHome";

class HomeContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false
        }
    }
    render = () => {
        let page
        if (this.state.isLoggedIn) {
            page = <LoggedIn userId={this.props.userId}/>
        } else {
            page = <NotLoggedIn/>
        }
        return (
            <>
                {page}
            </>
        )
    }

    componentDidMount() {
        this.checkIsLoggedIn()
    }

    checkIsLoggedIn = () => {
        let token = sessionStorage.getItem('authToken');
        let userId = sessionStorage.getItem('userId');
        let userInfo = sessionStorage.getItem('username');

        if (token && userId && userInfo) {
            this.setState({isLoggedIn: true})
        }
    }
}

export default HomeContainer