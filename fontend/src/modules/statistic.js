import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from "axios";
import {API_URL} from "../config/config";
import {BookingDel} from "../modules/booking/booking_del";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Auth from "../components/AuthService";
import _ from "lodash";
import base64 from "base-64";
const auth = new Auth()
class Statistic extends PureComponent {
    static propTypes = {}
    constructor(props) {
        super(props)

        this.state = {
            cur_date: new Date(),
            firstDay:'',
            lastDay:'',
            datas:[],
            booking_list:[],
            department_list: [],
            user_category_list:[],
            type_of_car_list:[],
            departure_list:[],
            arrival_list:[],
            NCC_list:[],
            startDate: '',
            time:'',
            user_list:[],
            user_ID:0
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChangeUser =this.handleChangeUser.bind(this)
    }
    handleChangeDate = date => {
        let y = date.getFullYear()
        let m = date.getMonth()
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        const datatemp = []
        axios.post(API_URL+'/production/booking/getBookingByMonth.php',{
            userID:this.state.user_ID,
            fromday: firstDay.getTime(),
            today: lastDay.getTime()
        }).then((data)=>{
            if(data != undefined && data != null  && data.data != null  && data.data != ''  ){
                data.data.map((row,index) =>{
                    let item = {
                        no:index+1,
                        id:row.id,
                        flag:row.flag,
                        date:new Date(parseInt(row.date)).toLocaleDateString(),
                        time:new Date(parseInt(row.time)).toLocaleTimeString(),
                        car:this.state.type_of_car_list.find(row1 => row1.id === row.type_of_car).name,
                        customer_name:row.customer_name,
                        customer_phone:row.customer_phone,
                        arrival_place:this.state.arrival_list.find(row1 => row1.id === row.arrival_place).name,
                        departure_place:this.state.departure_list.find(row1 => row1.id === row.departure_place).name,
                        // pickup_place:row.pickup_place,
                        // place_of_guest:row.place_of_guest,
                        NCC: this.state.NCC_list.find(row1 => row1.id === row.NCC_id).name,
                        price:row.price,
                        proceeds_vnd:row.proceeds_vnd,
                        proceeds_usd:row.proceeds_usd,
                        revenue_vnd:row.revenue_vnd,
                        revenue_usd:row.revenue_usd,
                        profit:row.profit,
                        note:row.note,
                        date_create:row.date_create
                    }
                    datatemp.push(item)
                })
               
            }
            this.setState({
                cur_date: date,
                firstDay:firstDay,
                lastDay:lastDay,
                datas:datatemp
            });
        })
      };
      handleChangeUser(user){
          console.log('user',user.target.value);
        const datatemp = []
        axios.post(API_URL+'/production/booking/getBookingByMonth.php',{
            userID:user.target.value,
            fromday: this.state.firstDay.getTime(),
            today: this.state.lastDay.getTime()
        }).then((data)=>{
            if(data != undefined && data != null  && data.data != null  && data.data != ''  ){
                data.data.map((row,index) =>{
                    let item = {
                        no:index+1,
                        id:row.id,
                        flag:row.flag,
                        date:new Date(parseInt(row.date)).toLocaleDateString(),
                        time:new Date(parseInt(row.time)).toLocaleTimeString(),
                        car:this.state.type_of_car_list.find(row1 => row1.id === row.type_of_car).name,
                        customer_name:row.customer_name,
                        customer_phone:row.customer_phone,
                        arrival_place:this.state.arrival_list.find(row1 => row1.id === row.arrival_place).name,
                        departure_place:this.state.departure_list.find(row1 => row1.id === row.departure_place).name,
                        // pickup_place:row.pickup_place,
                        // place_of_guest:row.place_of_guest,
                        NCC: this.state.NCC_list.find(row1 => row1.id === row.NCC_id).name,
                        price:row.price,
                        proceeds_vnd:row.proceeds_vnd,
                        proceeds_usd:row.proceeds_usd,
                        revenue_vnd:row.revenue_vnd,
                        revenue_usd:row.revenue_usd,
                        profit:row.profit,
                        note:row.note,
                        date_create:row.date_create
                    }
                    datatemp.push(item)
                })
               
            }
            this.setState({
                datas:datatemp
            });
        })
        this.setState({
            user_ID:user.target.value
        });
      };
    componentDidMount(){
        axios.post(API_URL+'/production/user/getAll.php').then((data)=>{
            this.setState({user_list:data.data})
            
        })
        axios.get(API_URL+'/production/department/getAll.php').then((data)=>{
            if(data){
                this.setState({department_list:data.data})
                
            }
        }).finally(()=>{
            axios.get(API_URL+'/production/usercategory/getAll.php').then((data)=>{
                if(data != undefined || data != null || data.data.typeof === "object"){
                    this.setState({user_category_list:data.data})
                    
                }
            }).finally(()=>{
                axios.get(API_URL+'/production/Car/getAll.php').then((data)=>{
                    if(data != undefined || data != null || data.data.typeof === "object"){
                        this.setState({type_of_car_list:data.data})
                        
                    }
                }).finally(()=>{
                    axios.get(API_URL+'/production/Departure/getAll.php').then((data)=>{
                        if(data != undefined || data != null || data.data.typeof === "object"){
                            this.setState({departure_list:data.data})
                            
                        }
                    }).finally(()=>{
                        axios.get(API_URL+'/production/Arrival/getAll.php').then((data)=>{
                            if(data != undefined || data != null || data.data.typeof === "object"){
                                this.setState({arrival_list:data.data})
                                
                            }
                        }).finally(()=>{
                            axios.get(API_URL+'/production/NCC/getAll.php').then((data)=>{
                                if(data != undefined || data != null || data.data.typeof === "object"){
                                    this.setState({NCC_list:data.data})
                                    
                                }
                            }).finally(()=>{
                                let date = new Date();
                                let y = date.getFullYear()
                                let m = date.getMonth()
                                var firstDay = new Date(y, m, 1);
                                var lastDay = new Date(y, m + 1, 0);
                                axios.post(API_URL+'/production/booking/getBookingByMonth.php',{
                                    userID:0,
                                    fromday: firstDay.getTime() ,
	                                today: lastDay.getTime() 
                                }).then((data)=>{
                                    
                                    if(data != undefined && data != null  && data.data != null  && data.data != ''  ){
                                        const datatemp = []
                                        data.data.map((row,index) =>{
                                            let item = {
                                                no:index+1,
                                                id:row.id,
                                                flag:row.flag,
                                                date:new Date(parseInt(row.date)).toLocaleDateString(),
                                                time:new Date(parseInt(row.time)).toLocaleTimeString(),
                                                car:this.state.type_of_car_list.find(row1 => row1.id === row.type_of_car).name,
                                                customer_name:row.customer_name,
                                                customer_phone:row.customer_phone,
                                                arrival_place:this.state.arrival_list.find(row1 => row1.id === row.arrival_place).name,
                                                departure_place:this.state.departure_list.find(row1 => row1.id === row.departure_place).name,
                                                // pickup_place:row.pickup_place,
                                                // place_of_guest:row.place_of_guest,
                                                NCC: this.state.NCC_list.find(row1 => row1.id === row.NCC_id).name,
                                                price:row.price,
                                                proceeds_vnd:row.proceeds_vnd,
                                                proceeds_usd:row.proceeds_usd,
                                                revenue_vnd:row.revenue_vnd,
                                                revenue_usd:row.revenue_usd,
                                                profit:row.profit,
                                                note:row.note,
                                                date_create:row.date_create
                                            }
                                            datatemp.push(item)
                                        })
                                        this.setState({
                                            booking_list:data.data,datas:datatemp})
                                    }
                                }) 
                                this.setState({
                                    cur_date: date,
                                    firstDay:firstDay,
                                    lastDay:lastDay
                                })
                            })
                        })
                    })
                }) 
            })
        })
    }  
    handleDelete(id){
        if(BookingDel(id)){
           }else{
            alert('error! please contact to Admin')
           }
    }
    remove=(index)=>{
        let data = [...this.state.datas] ;
        data.splice(index, 1)
        this.setState({datas: data})
    }
    render() {
            let data = this.state.datas
            const columns = [{
            Header: 'No',
            accessor: 'no', // String-based value accessors!
            width: 40
            },{
                Header: 'date',
                accessor: 'date',
                Cell:props => <span className={props.original.flag == 1? '':(props.original.date == (new Date().toLocaleDateString())? 'text-success font-weight-bold':'font-weight-bold')} >{props.value}</span>,
                width: 70,
            },{
                Header: 'time',
                accessor: 'time',
                width: 70,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>
                },{
                Header: 'car',
                accessor: 'car', // String-based value accessors!
                width: 100,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>
            },{
                Header: 'customer name',
                accessor: 'customer_name',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>,
                width: 100,          
            },{
                Header: 'customer phone',
                accessor: 'customer_phone',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>,
                width: 100,          
            },{
                Header: 'arrival place',
                accessor: 'arrival_place',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>, 
                width: 100,             
            },{
                Header: 'departure place',
                accessor: 'departure_place',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>,
                width: 100,          
            },
            // {
            //     Header: 'pickup place',
            //     accessor: 'pickup_place'          
            // },{
            //     Header: 'place of guest',
            //     accessor: 'place_of_guest'          
            // },
            // {
            //     Header: 'NCC',
            //     accessor: 'NCC',
            //     Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            // },
            {
                Header: 'price',
                accessor: 'price',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>,
                Footer: (
                    <span className="font-weight-bold">
                      <strong>Total proceeds: 0</strong>
                    </span>
                )           
            }
            ,{
                Header: 'proceeds (VND)',
                accessor: 'proceeds_vnd',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>,
                Footer: (
                    <span className="font-weight-bold">
                      <strong>Total proceeds: 0</strong>
                    </span>
                )           
            },{
                Header: 'proceeds (USD)',
                accessor: 'proceeds_usd',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>,
                Footer: (
                    <span className="font-weight-bold">
                      <strong>Total proceeds: {_.sum(_.map(data, d => parseFloat(d.proceeds_usd)))}</strong>
                    </span>
                )          
            },
            // {
            //     Header: 'Note',
            //     accessor: 'note',
            //     Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            // },
            // {
            //     Header: 'date create',
            //     accessor: 'date_create',
            //     Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            // }
        ]
            const user = this.state.user_list.map((row,index)=>{
                return <option key={index} value={row.id}>{row.first_name+ ' ' + row.last_name}</option>
            })
        return (
            <div className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div class="col-6">
                                    <h4 className="card-title">Booking Management</h4>
                                </div>
                                <div class="col-6">
                                    <span className="mr-md-3"><i class="material-icons text-success bg-success">
                                radio_button_unchecked
                                </i>  Today Booking </span>
                                <span className="mr-md-3"><i class="material-icons text-dark bg-dark">
                                radio_button_unchecked
                                </i>  has not been Check By Admin</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row align-items-center">
                                <div className="col">
                                        <div className="row">
                                            <label className="col-6">User</label>
                                            <select className="col-6" id="user" name="user" onChange={this.handleChangeUser} value={this.state.user_ID}>
                                                <option selected value="0">All</option>
                                                {user}
                                            </select>
                                        </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-2">
                            <div className="row align-items-center">
                                <div className="col">
                                    <DatePicker
                                        selected={this.state.cur_date}
                                        onChange={this.handleChangeDate}
                                        showMonthYearPicker
                                        dateFormat="MMMM"
                                    />
                                </div>
                            </div>
                            
                        </div>
                    </div>    
                    <ReactTable
                        filterable
                        data={data}
                        columns={columns}
                        className="-striped -highlight"
                    />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Statistic