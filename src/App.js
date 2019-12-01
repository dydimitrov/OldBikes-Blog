import React, {Component} from 'react';
import './App.css';
import About from './components/home/about'
import ErrorPage from './error-page'
import Footer from './components/navigation/footer'
import KinveyRequester from './KinveyRequester'
import Login from './components/user/login'
import Logout from './components/user/logout'
import NavBar from './components/navigation/navBar'
import HomeContainer from './components/home/homeContainer';
import PostCreate from './components/post/create'
import Register from './components/user/register'
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {MDBContainer} from "mdbreact"
import $ from 'jquery'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId"),
            isLoggedIn: false
        };
    }

    render() {
        return (
            <Router>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                />
                <MDBContainer flex="true">
                    <NavBar username={this.state.username} isLoggedIn={this.state.isLoggedIn}/>
                    <div id="infoBox" className="text-center">Info</div>
                    <div id="errorBox" className="text-center">Error</div>
                    <div className="bg">
                        <Switch>
                            <Route path="/" exact component={(props) => <HomeContainer {...props}
                                                                                       isLoggedIn={this.state.isLoggedIn}/>}/>
                            <Route path="/about" exact component={About}/>
                            <Route path="/login" exact
                                   component={(props) => <Login {...props} onsubmit={this.login}/>}/>
                            <Route path="/logout" exact
                                   component={(props) => <Logout {...props} logout={this.logout}/>}/>
                            <Route path="/register" exact
                                   component={(props) => <Register {...props} onsubmit={this.register}/>}/>
                            <Route path="/post/create" exact
                                   component={(props) => <PostCreate {...props} onsubmit={this.createPost}/>}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </div>
                    <Footer/>
                </MDBContainer>
            </Router>
        );
    }

    componentDidMount() {
        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show()
            },
            ajaxStop: function () {
                $("#loadingBox").hide()
            },
        });
        $("#infoBox, #errorBox").hide();

        $(document).ajaxError(this.handleAjaxError.bind(this));
    }

    handleAjaxError = (event, response) => {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }
    login = (username, password) => {
        KinveyRequester.loginUser(username, password)
            .then(loginSuccess.bind(this));

        function loginSuccess(userInfo) {
            this.saveAuthInSession(userInfo);
            this.showInfo("Login successful.");
            this.setState({isLoggedIn: true})
        }
    }
    logout = () => {
        KinveyRequester.logoutUser();
        sessionStorage.clear();
        this.setState({username: null, userId: null, isLoggedIn: false});
    }
    register = (username, password) => {
        KinveyRequester.registerUser(username, password)
            .then(registerSuccess.bind(this));

        function registerSuccess(userInfo) {
            this.saveAuthInSession(userInfo);
            this.showInfo("User registration successful.");

        }
    }
    saveAuthInSession = (userInfo) => {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }
    showInfo = (message) => {
        $('#infoBox').text(message).show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 1500);
    }
    showError = (errorMsg) => {
        $('#errorBox').text("Error: " + errorMsg).show();
    }

    createPost = (firstName, lastName, email, category, description) => {
        console.log(firstName, lastName, email, category, description)
        KinveyRequester.createPost(firstName, lastName, email, category, description)
            .then(createPostSuccess.bind(this));

        function createPostSuccess() {
            this.showInfo("Post created.");
        }
    }
}

export default App
