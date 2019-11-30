import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import KinveyRequester from "../../KinveyRequester";

export default class Logout extends Component {
    render = () => {
        this.logout();
        return <Redirect to='/' />
    }

    logout() {
        KinveyRequester.logoutUser();
        sessionStorage.clear();
        this.setState({username: null, userId: null});
    }
}