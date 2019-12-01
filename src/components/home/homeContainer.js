import React, {Component} from 'react';
import LoggedIn from "./loggedIn";
import NotLoggedIn from "./notLoggedIn";

class HomeContainer extends Component {
    render = () => {
        const {isLoggedIn} = this.props;
        let page
        if (isLoggedIn) {
            page = <LoggedIn/>
        } else {
            page = <NotLoggedIn/>
        }
        return (
            <>
                {page}
            </>
        )
    }
}

export default HomeContainer