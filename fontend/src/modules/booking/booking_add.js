import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import {API_URL} from "../../config/config";
class Bookingadd extends PureComponent {
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
        e.preventDefault();
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
                    alert('server error')
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
                    <div className="col-xs-12 col-sm-12 col-md-12 bg-white">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Please Enter new Booking information</h3>
                                    </div>
                                    <div className="panel-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="date" id="date" className="form-control input-sm" placeholder="date"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="time" id="time" className="form-control input-sm" placeholder="time"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Car Type</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="type_of_car" id="type_of_car" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {department}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <div className="form-group">
                                                    <input type="text" name="customer_name" id="customer_name" className="form-control input-sm" placeholder="Customer Name"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <div className="form-group">
                                                    <input type="text" name="customer_phone" id="customer_phone" className="form-control input-sm" placeholder="Customer Phone"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Departure Place</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="type_of_car" id="type_of_car" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {department}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Arrival Place</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="type_of_car" id="type_of_car" required>
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
                                                    <input type="text" name="pickup_place" id="pickup_place" className="form-control input-sm" placeholder="Pickup Place"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="place_of_guest" id="place_of_guest" className="form-control input-sm" placeholder="Place Of Guest"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="NCC" id="NCC" className="form-control input-sm" placeholder="NCC"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="price" id="price" className="form-control input-sm" placeholder="Price"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control input-sm"  rows="5" name="note" id="note" placeholder="Note"/>
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

export default Bookingadd