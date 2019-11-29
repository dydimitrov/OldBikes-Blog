import React, {Component} from 'react';
import {Route} from "react-router-dom";
import loggedIn from "./loggedIn";
import notLoggedIn from "./notLoggedIn";
import NavBar from "../navigation/navBar";

class HomeContainer extends Component {
    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <div>
                        <h1>Hello from home page</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeContainer