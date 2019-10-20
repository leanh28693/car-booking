import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Bg from "./assets/img/sidebar-1.jpg";
import Auth from "./components/AuthService";
const auth = new Auth()
class Main extends Component {
    static propTypes = {}
    
    constructor(props) {
        super(props)

        this.state = {
            selected:"dashboard",
            dropdownOpen: false
        }
        // this.setFilter =  this.setFilter.bind(this)
        this.isActive =  this.isActive.bind(this)
        this.toggle = this.toggle.bind(this);
        this.logOut =  this.logOut.bind(this);
    }
    logOut(){
        auth.logout()
        this.props.history.replace('/');
    }
    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    isActive(value){
        console.log('isActive')
        return ((value===this.props.rest.path) ?'active':'');
    }
    

    render() {
        return (
            <div>
            <div className="wrapper">
                <div className="sidebar" data-color="purple" data-background-color="white" data-image={Bg}>
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                    Creative Tim
                    </a>
                </div>
                  <div className="sidebar-wrapper">
                      <ul className="nav">
                      <li className={"nav-item "+ this.isActive('/')}>
                          <Link className="nav-link" to="/">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                          </Link>
                      </li>
                      <li className={"nav-item "+ this.isActive('/user')} >
                      <Link className="nav-link" to="/user">
                          <i className="material-icons">person</i>
                          <p>User Profile</p>
                          </Link>
                      </li>
                      <li className={"nav-item "+ this.isActive('/user-management')} >
                      <Link className="nav-link" to="/user-management">
                          <i className="material-icons">person</i>
                          <p>User Management</p>
                          </Link>
                      </li>
                      <li className={"nav-item "+ this.isActive('/admin-control')} >
                      <Link className="nav-link" to="/admin-control">
                          <i className="material-icons">content_paste</i>
                          <p>Admin Control</p>
                          </Link>
                      </li>
                      <li className={"nav-item "+ this.isActive('/table')} >
                      <Link className="nav-link" to="/table">
                          <i className="material-icons">content_paste</i>
                          <p>Booking</p>
                          </Link>
                      </li>
                      <li className={"nav-item "+ this.isActive('/statistics')}>
                      <Link className="nav-link" to="/statistics">
                          <i className="material-icons">content_paste</i>
                          <p>Statistics</p>
                          </Link>
                      </li>
                      <li className={"nav-item "+ this.isActive('/cms')}>
                      <Link className="nav-link" to="/cms">
                          <i className="material-icons">content_paste</i>
                          <p>CMS</p>
                          </Link>
                      </li>
                      
                      </ul>
                  </div>
                
                
                </div>
                <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <a className="navbar-brand" href="#pablo">Dashboard</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <form className="navbar-form">
                        <div className="input-group no-border">
                            <input type="text" value="" className="form-control" placeholder="Search..."/>
                            <button type="submit" className="btn btn-white btn-round btn-just-icon">
                            <i className="material-icons">search</i>
                            <div className="ripple-container"></div>
                            </button>
                        </div>
                        </form>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#pablo">
                            <i className="material-icons">dashboard</i>
                            <p className="d-lg-none d-md-block">
                                Stats
                            </p>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="material-icons">notifications</i>
                            <span className="notification">5</span>
                            <p className="d-lg-none d-md-block">
                                Some Actions
                            </p>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Mike John responded to your email</a>
                            <a className="dropdown-item" href="#">You have 5 new tasks</a>
                            <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                            <a className="dropdown-item" href="#">Another Notification</a>
                            <a className="dropdown-item" href="#">Another One</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                        <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle >
                                <i className="material-icons">person</i>
                                <p className="d-lg-none d-md-block">
                                    Account
                                </p>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-right">
                                <DropdownItem >Profile</DropdownItem>
                                <DropdownItem>Settings</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => this.logOut()}>Log out</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                            {/* <a className="nav-link"   >
                            <i className="material-icons">person</i>
                            <p className="d-lg-none d-md-block">
                                Account
                            </p>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Settings</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Log out</a> 
                            </div>*/}
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {this.props.children}
                <footer className="footer">
                    <div className="container-fluid">
                    <nav className="float-left">
                        <ul>
                        <li>
                            <a href="https://www.creative-tim.com">
                            Creative Tim
                            </a>
                        </li>
                        <li>
                            <a href="https://creative-tim.com/presentation">
                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="http://blog.creative-tim.com">
                            Blog
                            </a>
                        </li>
                        <li>
                            <a href="https://www.creative-tim.com/license">
                            Licenses
                            </a>
                        </li>
                        </ul>
                    </nav>
                    <div className="copyright float-right">
                         made with <i className="material-icons">favorite</i> by
                        <a href="https://www.creative-tim.com" >Creative Tim</a> for a better web.
                    </div>
                    </div>
                </footer>
                </div>
            </div>
            <div className="fixed-plugin">
                <div className="dropdown show-dropdown">
                <a href="#" data-toggle="dropdown">
                    <i className="fa fa-cog fa-2x"> </i>
                </a>
                <ul className="dropdown-menu">
                    <li className="header-title"> Sidebar Filters</li>
                    <li className="adjustments-line">
                    <a href="javascript:void(0)" className="switch-trigger active-color">
                        <div className="badge-colors ml-auto mr-auto">
                        <span className="badge filter badge-purple" data-color="purple"></span>
                        <span className="badge filter badge-azure" data-color="azure"></span>
                        <span className="badge filter badge-green" data-color="green"></span>
                        <span className="badge filter badge-warning" data-color="orange"></span>
                        <span className="badge filter badge-danger" data-color="danger"></span>
                        <span className="badge filter badge-rose active" data-color="rose"></span>
                        </div>
                        <div className="clearfix"></div>
                    </a>
                    </li>
                    <li className="header-title">Images</li>
                    <li className="active">
                    <a className="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../assets/img/sidebar-1.jpg" alt=""/>
                    </a>
                    </li>
                    <li>
                    <a className="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../assets/img/sidebar-2.jpg" alt=""/>
                    </a>
                    </li>
                    <li>
                    <a className="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../assets/img/sidebar-3.jpg" alt=""/>
                    </a>
                    </li>
                    <li>
                    <a className="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../assets/img/sidebar-4.jpg" alt=""/>
                    </a>
                    </li>
                    <li className="button-container">
                    <a href="https://www.creative-tim.com/product/material-dashboard"  className="btn btn-primary btn-block">Free Download</a>
                    </li>

                    <li className="button-container">
                    <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html"  className="btn btn-default btn-block">
                        View Documentation
                    </a>
                    </li>
                    <li className="button-container github-star">
                    <a className="github-button"  data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
                    </li>
                    <li className="header-title">Thank you for 95 shares!</li>
                    <li className="button-container text-center">
                    <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter"></i> &middot; 45</button>
                    <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f"></i> &middot; 50</button>
                    <br/>
                    <br/>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Main