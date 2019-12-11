import React, {Component} from 'react';
import './App.css';
import './assets/css/bootstrap.min.css'
import About from './components/home/about'
import ErrorPage from './error-page'
import DeletePost from "./components/post/deletePost";
import Footer from './components/navigation/footer'
import KinveyRequester from './KinveyRequester'
import Login from './components/user/login'
import Logout from './components/user/logout'
import NavBar from './components/navigation/navBar'
import HomeContainer from './components/home/homeContainer';
import PostCreate from './components/post/createPost'
import SinglePost from './components/post/singlePost'
import Register from './components/user/register'
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {MDBContainer} from "mdbreact"
import $ from 'jquery'
import EditPost from "./components/post/editPost";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId"),
            isLoggedIn: false,
        };
    }

    render() {
        return (
            <>
                <Router>
                    <header>
                        <NavBar username={this.state.username} isLoggedIn={this.state.isLoggedIn}/>
                    </header>
                    <MDBContainer className="body text-white">
                        <div id="infoBox" className="text-center">Info</div>
                        <div id="errorBox" className="text-center">Error</div>
                        <Switch>
                            <Route path="/" exact
                                   component={(props) => <HomeContainer {...props} userId={this.state.userId}
                                                                        isLoggedIn={this.state.isLoggedIn}/>}/>
                            <Route path="/about" exact component={About}/>
                            <Route path="/login" exact
                                   component={(props) => <Login {...props} onsubmit={this.login}/>}/>
                            <Route path="/logout" exact
                                   component={(props) => <Logout {...props} logout={this.logout}/>}/>
                            <Route path="/register" exact
                                   component={(props) => <Register {...props} onsubmit={this.register}/>}/>
                            <Route path="/post/create" exact
                                   component={(props) => <PostCreate {...props}
                                                                     onsubmit={this.createPost}
                                                                     firstName={this.state.firstName}
                                                                     lastName={this.state.lastName}/>}/>
                            <Route path="/post/single/:id" exact
                                   component={(props) => <SinglePost {...props} userId={this.state.userId}/>}/>
                            <Route path="/post/edit/:id" exact
                                   component={(props) => <EditPost {...props} onsubmit={this.postEdit}
                                                                   firstName={this.state.firstName}
                                                                   lastName={this.state.lastName}/>}/>
                            <Route path="/post/delete/:id" exact
                                   component={(props) => <DeletePost {...props} onsubmit={this.deletePost}/>}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </MDBContainer>
                    <footer>
                        <Footer/>
                    </footer>
                </Router>
            </>
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

        this.checkIsLoggedIn();
    }

    checkIsLoggedIn = () => {
        let token = sessionStorage.getItem('authToken');
        let userId = sessionStorage.getItem('userId');
        let userInfo = sessionStorage.getItem('username');

        if (token && userId && userInfo) {
            this.setState({isLoggedIn: true})
        }
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
        this.setState({username: null, userId: null, isLoggedIn: false, firstName: null, lastName: null});
    }

    register = (username, password, firstName, lastName) => {
        KinveyRequester.registerUser(username, password, firstName, lastName)
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
            userId: userInfo._id,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
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
        setTimeout(function () {
            $('#errorBox').fadeOut();
        }, 1500);
    }

    createPost = (firstName, lastName, email, category, description, title) => {
        console.log(firstName, lastName, email, category, description, title)
        KinveyRequester.createPost(firstName, lastName, email, category, description, title)
            .then(createPostSuccess.bind(this));

        function createPostSuccess() {
            this.showInfo("Post created.");
        }
    }

    deletePost = (postId) => {
        KinveyRequester.deletePost(postId)
            .then(deletePostSuccess)

        function deletePostSuccess() {
            this.showInfo("Post deleted succesfully.");
        }
    }

    postEdit = (postId, firstName, lastName, email, category, description, title) => {
        KinveyRequester.editPost(postId, firstName, lastName, email, category, description, title)
            .then(editPostSuccess.bind(this));

        function editPostSuccess() {
            this.showInfo("Post edited.");
        }
    }
}

export default App
