import React, {Component} from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import {BrowserRouter as Router} from 'react-router-dom';

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
            <MDBNavbar className="navbar-nav " expand="md">
                <MDBNavbarBrand>
                    <strong className="dark-grey-text">OldBike`s Blog</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about">About</MDBNavLink>
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
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Post</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {
                                        isLoggedIn ? (
                                            <>
                                                <MDBNavLink to="/post/create">Create</MDBNavLink>
                                                <MDBNavLink to="/post/all"> All posts</MDBNavLink>
                                            </>
                                        ):(
                                            <MDBNavLink to="/post/all"> All posts</MDBNavLink>
                                        )
                                    }

                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavbarPage;