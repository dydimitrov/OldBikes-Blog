import React, {Component} from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBCollapse,
} from "mdbreact";


class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        let username = this.props.username;
        let isLoggedIn = username == null ? false : true;
        return (
            <MDBNavbar className="navbar-nav light" expand="md">
                <MDBNavbarBrand className='ml-5 text-light'>
                    <strong className="dark-grey-text">OldBike`s Blog</strong>
                </MDBNavbarBrand>
                <button className="navbar-toggler" type="button" onClick={this.toggleCollapse}><span className="dark-blue-text"><i
                    className="fa fa-bars fa-1x"></i></span></button>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about">About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            {
                                isLoggedIn ? (
                                    <>
                                        <MDBNavLink to="/post/create">Create Post</MDBNavLink>
                                    </>
                                ):""
                            }
                        </MDBNavItem>
                        {
                            isLoggedIn ? (
                                <MDBNavItem>
                                    < MDBNavLink to="/logout">Logout</MDBNavLink>
                                </MDBNavItem>
                            ) : (<>
                                    <MDBNavItem>
                                        <MDBNavLink to="/login">Login</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/register">Register</MDBNavLink>
                                    </MDBNavItem>
                                </>
                            )
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;