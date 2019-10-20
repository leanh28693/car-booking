import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {API_URL} from "../../config/config";
import axios from "axios";
class Useredit extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            department_list: [],
            user_category_list:[],
            user: [{"id":"0","first_name":"","last_name":"","email":"","phone":"","address":"","department":"1","user_category":"1","username":""}]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        axios.get(API_URL+'/production/department/getAll.php').then((data)=>{
            if(data){
                this.setState({department_list:data.data})
                console.log('data',data.data)
            }
            
        })  
        axios.get(API_URL+'/production/usercategory/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({user_category_list:data.data})
                console.log('data',data)
            }
        }) 
        if(this.props.match != undefined){
            axios.post(API_URL+'/production/user/editUser.php',{
                id: this.props.match.params.id}
                ).then((data)=>{
                if(data){
                    this.setState({user:data.data})
                    console.log('data',data.data)
                }
                
            })
        }else{
            this.props.history.replace('/user-management');
        }
        
    } 
    handleChange(e){
        console.log('target',e.target.name)
        this.setState({user:[{...this.state.user[0],[e.target.name]:e.target.value}]})
       
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('e',e.target.password.value)
        axios.post(API_URL+'/car_booking/production/user/updateUser.php',{
            id: e.target.id.value,
            frsname: e.target.first_name.value,
            lastname: e.target.last_name.value,
            department: e.target.department.value,
            address: e.target.address.value,
            username: e.target.username.value,
            password: e.target.password.value,
            user_category: e.target.user_category.value,
            phone: e.target.phone.value,
            email: e.target.email.value
          }).then((data)=>{
                console.log('data',data)
                if(data.data.message == '1'){
                    alert('successfull')
                    this.props.history.replace('/user-management');
                }else{
                    alert('server error')
                }
        })
    }
    render() {
        const department = this.state.department_list.map(row =>{
            return <option key={row.id} value={row.id} selected={(this.state.user[0].department == row.id)?true:false}>{row.name}</option>
        })
        const user_category = this.state.user_category_list.map(row =>{
            return <option key={row.id} value={row.id} selected={(this.state.user[0].user_category == row.id)?true:false}>{row.name}</option>
        })
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-8 col-md-8 bg-white">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Update user information</h3>
                                    </div>
                                    <div className="panel-body">
                                    <form role="form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                            <input type="text" name="id" id="id" className="form-control input-sm " style={{display:'none'}} onChange={this.handleChange} value={this.state.user[0].id} placeholder="id"/>
                                    </div>
                                    <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="first_name" id="first_name" className="form-control input-sm" onChange={this.handleChange} value={this.state.user[0].first_name} placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="last_name" id="last_name" className="form-control input-sm" onChange={this.handleChange} value={this.state.user[0].last_name} placeholder="Last Name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control input-sm" onChange={this.handleChange} value={this.state.user[0].email} placeholder="Email Address"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label col-form-label-sm">Department</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-control" name="department" id="department" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {department}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone" id="phone" className="form-control input-sm" onChange={this.handleChange} value={this.state.user[0].phone} placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group row">
                                                    <label className="col-sm-4 col-form-label col-form-label-sm">User Role</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-control" name="user_category" id="user_category" required>
                                                            <option value="0" disabled selected>Select</option>
                                                            {user_category}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="address" id="address" className="form-control input-sm" onChange={this.handleChange}  value={this.state.user[0].address} placeholder="Address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="username" id="username" className="form-control input-sm"  value={this.state.user[0].username} disabled placeholder="Username"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="text-danger"> Don't Enter Password if you don't want to change (*)</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <input type="submit" value="Register" className="btn btn-info btn-block"/>
                                    
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

export default Useredit