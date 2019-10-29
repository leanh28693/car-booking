import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import {API_URL} from "../../config/config";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Useradd extends PureComponent {
    static propTypes = {}
    
    constructor(props) {
        super(props)
        this.state = {
            department_list: [],
            user_category_list:[]
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
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
    }
    handleSubmit(e){
        console.log('ok')
        
        e.preventDefault();
        if(e.target.password_confirmation.value !=  e.target.password.value){
            toast("password confirm not correct");
            return false
        }
            
        if(e.target.department.value == '0' || e.target.user_category.value == '0' || e.target.phone.value == ''){
            toast('please enter Obligatory Row');
            return false
        }
        
        console.log('e',e.target.password.value)
        axios.post(API_URL+'/production/user/addUser.php',{
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
                    if(data.data.message == '2'){
                        alert('username existed !')
                    }
                    else{
                        alert('Add user False ! please ask admin')
                    }
                    
                }
        })
        e.preventDefault();
    }
    render() {
        const department = this.state.department_list.map(row =>{
            return <option value={row.id}>{row.name}</option>
        })
        const user_category = this.state.user_category_list.map(row =>{
            return <option value={row.id}>{row.name}</option>
        })
        return (
            <div className="content">
               
                <div className="container-fluid">
                    <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-8 col-md-8 bg-white">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Please Enter new user information</h3>
                                    </div>
                                    <div className="panel-body">
                                    <form  onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Department (*)</label>
                                                    <div class="col-sm-8">
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
                                                    <input type="text" name="phone" id="phone" className="form-control input-sm" placeholder="Phone (*)"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">User Role (*)</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="user_category" id="user_category" required>
                                                            <option value="0" disabled selected>Select</option>
                                                            {user_category}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="address" id="address" className="form-control input-sm" placeholder="Address"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="username" id="username" className="form-control input-sm" placeholder="Username (*)" required/>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password (*)" required/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password (*)"/>
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

export default Useradd