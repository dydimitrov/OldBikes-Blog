import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import HomeContainer from "./components/home/homeContainer";
import Register from "./components/user/register";
import Login from "./components/user/login";
import ErrorPage from "./error-page";
import About from "./components/home/about"
import NavBar from "./components/navigation/navBar";
import Footer from "./components/navigation/footer";
import {MDBContainer} from "mdbreact";
import PostCreate from "./components/post/create";

class App extends Component {
    render() {
        return (
            <Router>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                />
                <MDBContainer flex>
                    <NavBar/>
                        <div className="bg">
                            <Switch>
                                <Route path="/" exact component={HomeContainer}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/login" exact component={Login}/>
                                <Route path="/register" exact component={Register}/>
                                <Route path="/post/create" exact component={PostCreate}/>
                                <Route component={ErrorPage}/>
                            </Switch>
                        </div>
                    <Footer/>
                </MDBContainer>
            </Router>
        );
    }
}

export default App;
