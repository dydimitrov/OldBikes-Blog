import React, {Component} from 'react';
import LoggedIn from "./privateHome";
import NotLoggedIn from "./publicHome";

class HomeContainer extends Component {
    render = () => {
        const {isLoggedIn} = this.props;
        let page
        if (isLoggedIn) {
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
}

export default HomeContainer