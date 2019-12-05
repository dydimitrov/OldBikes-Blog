import React, {Component} from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
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
            <MDBNavbar className="navbar-nav black" expand="md">
                <MDBNavbarBrand className='ml-5'>
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