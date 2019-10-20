import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auths from "../components/AuthService";
import { withRouter } from 'react-router';
class Login extends Component {
    static propTypes = {}
    static Auth = null

    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:""
        }
        this.Auth = new Auths()
        try {
            if(this.Auth.isTokenExpired(this.Auth.getToken()))
                this.props.history.replace('/');
        } catch (error) {
            alert(error)
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange =  this.handleChange.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
                this.props.history.replace('/');
                console.log(res)
            })
            .catch(err =>{
                alert(err);
            })
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
       
    }
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                <div className="card card-login mx-auto text-center bg-dark">
                    <div className="card-header mx-auto bg-dark">
                        <span> <img src="https://amar.vote/assets/img/amarVotebd.png" className="w-75" alt="Logo"/> </span><br/>
                                    <span className="logo_title mt-5"> Login Dashboard </span>

                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="username" className="form-control" onChange={this.handleChange} value={this.state.username}  placeholder="Username"/>
                            </div>

                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <input type="submit" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Login