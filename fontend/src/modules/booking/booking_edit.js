import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {API_URL} from "../../config/config";
import DatePicker from "react-datepicker";
import base64 from "base-64";
import Auth from "../../components/AuthService";
import axios from "axios";
class Bookingedit extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            booking:[{"id":"15","date":"1571763600000","time":"1571709300768","type_of_car_id":"3","customer_name":"nhat anh 3","customer_phone":"0352336270","arrival_place_id":"3","departure_place_id":"1","NCC_id":"3","partner_id":"0","place_of_guest":"\u00e1\u0111\u00e2sd","price":"100","proceeds_vnd":"20000","proceeds_usd":"","revenue_vnd":null,"revenue_usd":"","profit":"-9900","note":"1 khach","user_id":"5"}],
            department_list: [],
            user_category_list:[],
            type_of_car_list:[],
            departure_list:[],
            arrival_list:[],
            NCC_list:[],
            partner_list:[],
            startDate: '1572368400000',
            time:'1572368400000',
            flag:false
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeTime = this.handleChangeTime.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeChecked = this.handleChangeChecked.bind(this)
    }
    handleChangeDate = date => {
        this.setState({
          startDate: date.getTime()
        });
      };
    handleChangeTime = time => {
        this.setState({
            time: time.getTime()
        });
      };
    handleChange(e){

        this.setState({booking:[{...this.state.booking[0],[e.target.name]:e.target.value}]})
       
    }
    handleChangeChecked(e){

        this.setState({flag:!this.state.flag})
        
    }
    componentDidMount(){
        if(this.props.match != undefined){
            axios.post(API_URL+'/production/booking/editBooking.php',{
                id: this.props.match.params.id}
                ).then((data)=>{
                if(data){
                    this.setState({
                        booking:data.data,
                        startDate:data.data[0].date,
                        time:data.data[0].time,
                        flag:(data.data[0].flag == '1')?true:false

                    })
                    console.log('data',data.data)
                }
                
            })
        }else{
            this.props.history.replace('/table');
        }
        // axios.get(API_URL+'/production/department/getAll.php').then((data)=>{
        //     if(data){
        //         this.setState({department_list:data.data})
        //         console.log('data',data.data)
        //     }
            
        // })
        axios.get(API_URL+'/production/Partner/getAll.php').then((data)=>{
            if(data){
                this.setState({partner_list:data.data})
                console.log('data',data.data)
            }
            
        })    
        axios.get(API_URL+'/production/usercategory/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({user_category_list:data.data})
                console.log('data',data)
            }
        })
        axios.get(API_URL+'/production/Car/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({type_of_car_list:data.data})
                console.log('data',data)
            }
        })   
        axios.get(API_URL+'/production/Departure/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({departure_list:data.data})
                console.log('data',data)
            }
        })
        axios.get(API_URL+'/production/Arrival/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({arrival_list:data.data})
                console.log('data',data)
            }
        })  
        axios.get(API_URL+'/production/NCC/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({NCC_list:data.data})
                console.log('data',data)
            }
        }) 
    }
    handleSubmit(e){
        e.preventDefault();
        const auth = new Auth()
        let token = auth.getToken()
        let decoded = JSON.parse(base64.decode(auth.getToken()))
        if(decoded.department== '1'){
        axios.post(API_URL+'/production/Booking/updateBooking.php',{
            id: e.target.id.value ,
            date: this.state.startDate,
            time: this.state.time,
            flag:(e.target.updated.checked)?1:0,
            departure: e.target.departure.value ,
            partner: e.target.partner.value ,
            arrival: e.target.arrival.value,
            pickup_place: e.target.pickup_place.value,
            place_of_guest: e.target.place_of_guest.value,
            type_of_car: e.target.type_of_car.value,
            customer_name: e.target.customer_name.value,
            customer_phone: e.target.customer_phone.value,
            price : e.target.price.value,
            proceeds_vnd: e.target.proceeds_vnd.value,
            proceeds_usd: e.target.proceeds_usd.value,
            revenue_vnd: e.target.revenue_vnd.value,
            revenue_usd: e.target.revenue_usd.value,
            NCC:e.target.NCC.value,
            note : e.target.note.value,
            token:token
          }).then((data)=>{
                console.log('data',data)
                if(data.data.message == '1'){
                    alert('successfull')
                    this.props.history.replace('/table');
                }else{
                    alert('server error')
                }
        })
    }
        //e.preventDefault();
    }
    render() {
        const department = this.state.department_list.map(row =>{
            return <option value={row.id}>{row.name}</option>
        })
        const partner = this.state.partner_list.map(row =>{
            return <option value={row.id} selected={(this.state.booking[0].partner_id == row.id)?true:false}>{row.name}</option>
        })
        const departure = this.state.departure_list.map(row =>{
            return <option value={row.id}  selected={(this.state.booking[0].departure_place_id == row.id)?true:false}>{row.name}</option>
        })
        const type_of_car = this.state.type_of_car_list.map(row =>{
            return <option value={row.id} selected={(this.state.booking[0].type_of_car_id == row.id)?true:false}>{row.name}</option>
        })
        const arrival = this.state.arrival_list.map(row =>{
            return <option value={row.id} selected={(this.state.booking[0].arrival_place_id == row.id)?true:false}>{row.name}</option>
        })
        const NCC = this.state.NCC_list.map(row =>{
            return <option value={row.id} selected={(this.state.booking[0].NCC_id == row.id)?true:false}>{row.name}</option>
        })
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 bg-white">
                        <form onSubmit={this.handleSubmit}>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Please Enter to update Booking information</h3>
                                    <div className="form-check">
                                            <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" id="updated" name="updated" value="1" onChange={this.handleChangeChecked} checked={this.state.flag}/>
                                            <span className="form-check-sign">
                                                <span className="check"></span>
                                            </span>Checked
                                            </label>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                                <input type="text" name="id" id="id" className="form-control input-sm " style={{display:'none'}} onChange={this.handleChange} value={this.state.booking[0].id} placeholder="id"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label-sm">Car Type</label>
                                                    <div class="col-sm-10">
                                                        <DatePicker
                                                            selected={new Date(parseInt(this.state.startDate))}
                                                            onChange={this.handleChangeDate}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="col-xs-6 col-sm-6 col-md-6">
                                                    <div class="form-group row">
                                                        <label for="colFormLabel" class="col-sm-3 col-form-label col-form-label-sm">time</label>
                                                        <div class="col-sm-9">
                                                            <DatePicker
                                                                selected={new Date(parseInt(this.state.time))}
                                                                onChange={this.handleChangeTime}
                                                                showTimeSelect
                                                                showTimeSelectOnly
                                                                timeIntervals={5}
                                                                timeCaption="Time"
                                                                dateFormat="h:mm aa"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Car Type</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="type_of_car" id="type_of_car"  required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {type_of_car}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <div className="form-group">
                                                    <input type="text" name="customer_name" id="customer_name" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].customer_name} placeholder="Customer Name"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <div className="form-group">
                                                    <input type="text" name="customer_phone" id="customer_phone" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].customer_phone} placeholder="Customer Phone"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Departure Place</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="departure" id="departure" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {departure}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-4 col-form-label col-form-label-sm">Arrival Place</label>
                                                    <div class="col-sm-8">
                                                        <select className="form-control" name="arrival" id="arrival" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {arrival}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="pickup_place" id="pickup_place" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].pickup_place} placeholder="Pickup Place"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="place_of_guest" id="place_of_guest" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].place_of_guest} placeholder="Place Of Guest"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label-sm">Supplier</label>
                                                    <div class="col-sm-10">
                                                        <select className="form-control" name="NCC" id="NCC" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {NCC}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div class="form-group row">
                                                    <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label-sm">Partner</label>
                                                    <div class="col-sm-10">
                                                        <select className="form-control" name="partner" id="partner" required>
                                                            <option value="0" disabled selected>Select </option>
                                                            {partner}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="price" id="price" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].price} placeholder="Price"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="proceeds_vnd" id="proceeds_vnd" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].proceeds_vnd} placeholder="proceeds(vnd)"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="proceeds_usd" id="proceeds_usd" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].proceeds_usd} placeholder="proceeds(USD)"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="revenue_vnd" id="revenue_vnd" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].revenue_vnd} placeholder="revenue(vnd)"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="revenue_usd" id="revenue_usd" className="form-control input-sm" onChange={this.handleChange} value={this.state.booking[0].revenue_usd} placeholder="revenue(USD)"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control input-sm"  rows="5" name="note" id="note" onChange={this.handleChange} value={this.state.booking[0].note} placeholder="Note"/>
                                                </div>
                                            </div>
                                        </div>   
                                        <input type="submit" value="Update" className="btn btn-info btn-block"/>
                                    
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookingedit