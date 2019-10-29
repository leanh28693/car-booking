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
import base64 from "base-64";
const auth = new Auth()
class Statistic extends PureComponent {
    static propTypes = {}


    constructor(props) {
        super(props)

        this.state = {
            cur_date: new Date(),
            datas:[],
            booking_list:[],
            department_list: [],
            user_category_list:[],
            type_of_car_list:[],
            departure_list:[],
            arrival_list:[],
            NCC_list:[],
            startDate: '',
            time:''
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChangeDate = date => {
        this.setState({
            cur_date: date
        });
      };
    componentDidMount(){
        axios.get(API_URL+'/production/department/getAll.php').then((data)=>{
            if(data){
                this.setState({department_list:data.data})
                console.log('data',data.data)
            }
        }).finally(()=>{
            axios.get(API_URL+'/production/usercategory/getAll.php').then((data)=>{
                if(data != undefined || data != null || data.data.typeof === "object"){
                    this.setState({user_category_list:data.data})
                    console.log('data',data)
                }
            }).finally(()=>{
                axios.get(API_URL+'/production/Car/getAll.php').then((data)=>{
                    if(data != undefined || data != null || data.data.typeof === "object"){
                        this.setState({type_of_car_list:data.data})
                        console.log('data',data)
                    }
                }).finally(()=>{
                    axios.get(API_URL+'/production/Departure/getAll.php').then((data)=>{
                        if(data != undefined || data != null || data.data.typeof === "object"){
                            this.setState({departure_list:data.data})
                            console.log('data',data)
                        }
                    }).finally(()=>{
                        axios.get(API_URL+'/production/Arrival/getAll.php').then((data)=>{
                            if(data != undefined || data != null || data.data.typeof === "object"){
                                this.setState({arrival_list:data.data})
                                console.log('data',data)
                            }
                        }).finally(()=>{
                            axios.get(API_URL+'/production/NCC/getAll.php').then((data)=>{
                                if(data != undefined || data != null || data.data.typeof === "object"){
                                    this.setState({NCC_list:data.data})
                                    console.log('data',data)
                                }
                            }).finally(()=>{
                                axios.post(API_URL+'/production/booking/getBookingByMonth.php',{
                                    fromday: "1568653200000",
	                                today: "1571763600000"
                                }).then((data)=>{
                                    console.log('====>',data.data)
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
                                        this.setState({booking_list:data.data,datas:datatemp})
                                    }
                                }) 
                            })
                        })
                    })
                }) 
            })
        })
    }  
    handleDelete(id){
        console.log('delete id: ',id)
        if(BookingDel(id)){
            //confirm("Do you want to Delete that Booking ?")
            //this.props.history.replace('/admin-control');
           }else{
            alert('error! please contact to Admin')
           }
        //NCCDel(id)
    }
    remove=(index)=>{
        let data = [...this.state.datas] ;
        console.log(data);
        data.splice(index, 1)
        this.setState({datas: data})
    }
    render() {
        console.log(this.state.booking_list)
            let data = this.state.datas
          const columns = [{
            Header: 'No',
            accessor: 'no', // String-based value accessors!
            width: 40
            },{
                Header: 'date',
                accessor: 'date',
                Cell:props => <span className={props.original.flag == 1? '':(props.original.date == (new Date().toLocaleDateString())? 'text-success font-weight-bold':'font-weight-bold')} >{props.value}</span>
            },{
                Header: 'time',
                accessor: 'time',
                width: 70,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>
                },{
                Header: 'car',
                accessor: 'car', // String-based value accessors!
                width: 70,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>
            },{
                Header: 'customer name',
                accessor: 'customer_name',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'customer phone',
                accessor: 'customer_phone',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'arrival place',
                accessor: 'arrival_place',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'departure place',
                accessor: 'departure_place',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },
            // {
            //     Header: 'pickup place',
            //     accessor: 'pickup_place'          
            // },{
            //     Header: 'place of guest',
            //     accessor: 'place_of_guest'          
            // },
            {
                Header: 'NCC',
                accessor: 'NCC',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'price',
                accessor: 'price',
                width: 70,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'proceeds (VND)',
                accessor: 'proceeds_vnd',
                width: 70,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'proceeds (USD)',
                accessor: 'proceeds_usd',
                width: 70,
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'Note',
                accessor: 'note',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            },{
                Header: 'date create',
                accessor: 'date_create',
                Cell:props => <span className={props.original.flag == 1? '':'font-weight-bold'}>{props.value}</span>          
            }]
            
        return (
            <div className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                    <div className="row">
                        <div className="col-10">
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