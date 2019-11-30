import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import HomeContainer from "./components/home/homeContainer";
import Register from "./components/user/register";
import Login from "./components/user/login";
import ErrorPage from "./error-page";
import About from "./components/home/about"
import NavBar from "./components/navigation/navBar";
import Footer from "./components/navigation/footer";
import {MDBContainer} from "mdbreact";
import PostCreate from "./components/post/create";
import KinveyRequester from './KinveyRequester';
import Logout from "./components/user/logout";
import $ from 'jquery';

class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Router>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                />
                <MDBContainer flex>
                    <NavBar/>
                    <div id="loadingBox">Loading ...</div>
                    <div id="infoBox">Info</div>
                    <div id="errorBox">Error</div>
                        <div className="bg">
                            <Switch>
                                <Route path="/" exact component={HomeContainer}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/login" exact component={() => <Login onsubmit={this.login.bind(this)}/>}/>
                                <Route path="/logout" exact component={Logout}/>
                                <Route path="/register" exact component={() => <Register onsubmit={this.register.bind(this)}/>}/>
                                <Route path="/post/create" exact component={PostCreate}/>
                                <Route component={ErrorPage}/>
                            </Switch>
                        </div>
                    <Footer/>
                </MDBContainer>
            </Router>
        );
    }
    componentDidMount() {
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() },
        });
        $("#infoBox, #errorBox").hide();
        // Attach a global AJAX error handler
        $(document).ajaxError(this.handleAjaxError.bind(this));

        // Hide the info / error boxes when clicked


        // Initially load the "Home" view when the app starts
        this.showHome();
    }

    showHome(){
        return  <Redirect to='/' />
    }
    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }
    login(username, password) {
        KinveyRequester.loginUser(username, password)
            .then(loginSuccess.bind(this));

        function loginSuccess(userInfo) {
            this.saveAuthInSession(userInfo);

            this.showInfo("Login successful.");
        }
    }
    register(username, password) {
        KinveyRequester.registerUser(username, password)
            .then(registerSuccess.bind(this));

        function registerSuccess(userInfo) {
            this.saveAuthInSession(userInfo);

            this.showInfo("User registration successful.");
        }
    }
    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }
    showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }
    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }
}



export default App;
