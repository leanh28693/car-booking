import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from "axios";
import {API_URL} from "../../config/config";
class Table extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            booking_list:[]
        }
    }
    componentDidMount(){
        axios.get(API_URL+'/production/Booking/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({booking_list:data.data})
                console.log('data',data)
            }
        })  
    }
    render() {
        const data = []
        this.state.booking_list.map((row,index) =>{
            let item = {
                no:index+1,
                id:row.id,
                date:row.date,
                time:row.time,
                car:row.type_of_car,
                customer_name:row.customer_name,
                customer_phone:row.customer_phone,
                arrival_place:row.arrival_place,
                departure_place:row.departure_place,
                pickup_place:row.pickup_place,
                place_of_guest:row.place_of_guest,
                NCC:row.NCC,
                price:row.price,
                proceeds_vnd:row.proceeds_vnd,
                proceeds_usd:row.proceeds_usd,
                revenue_vnd:row.revenue_vnd,
                revenue_usd:row.revenue_usd,
                profit:row.profit,
                note:row.note,
                date_create:row.date_create


            }
            data.push(item)

        })
          const columns = [{
            Header: 'No',
            accessor: 'no', // String-based value accessors!
            width: 40
            },{
                Header: 'date',
                accessor: 'date' // String-based value accessors!
            },{
                Header: 'time',
                accessor: 'time',
                width: 70
                },{
                Header: 'car',
                accessor: 'car', // String-based value accessors!
                width: 70
            },{
                Header: 'customer name',
                accessor: 'customer_name'          
            },{
                Header: 'customer phone',
                accessor: 'customer_phone'          
            },{
                Header: 'arrival place',
                accessor: 'arrival_place'          
            },{
                Header: 'departure place',
                accessor: 'departure_place'          
            },{
                Header: 'pickup place',
                accessor: 'pickup_place'          
            },{
                Header: 'place of guest',
                accessor: 'place_of_guest'          
            },{
                Header: 'NCC',
                accessor: 'NCC'          
            },{
                Header: 'price',
                accessor: 'price',
                width: 70          
            },{
                Header: 'proceeds (VND)',
                accessor: 'proceeds_vnd',
                width: 70          
            },{
                Header: 'proceeds (USD)',
                accessor: 'proceeds_usd',
                width: 70          
            },{
                Header: 'Note',
                accessor: 'note'          
            },{
                Header: 'date create',
                accessor: 'date_create'          
            },{
                Header: 'Edit',
                accessor: 'id',
                Cell: props =><Link  to={"/booking-edit/"+props.original.id}>
                                <button type="button" rel="tooltip" title="Edit Task"  className="btn btn-primary btn-link btn-sm">
                                <i className="material-icons">edit</i>
                                </button>
                            </Link>,
                width: 70            
            },{
                Header: 'Edit',
                accessor: 'id',
                Cell: props => <button type="button" onClick={()=> this.handleDelete(props.original.id)} rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                </button>,
                width: 70                 
            }]
        return (

                <div className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                    <div className="row">
                        <div className="col-10">
                            <h4 className="card-title ">User Management</h4>
                            <p className="card-category">User list</p>
                        </div>
                        <div className="col-2">
                            <Link  to="/booking-add">
                                <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                    <i className="material-icons">note_add</i>
                                </button>
                            </Link>
                        </div>
                    </div>    
                    <ReactTable
                        filterable
                        data={data}
                        columns={columns}
                    />
                    {/* <div className="card-header card-header-success">
                                        <div className="row">
                                            <div className="col-10">
                                                <h4 className="card-title ">Transfer</h4>
                                                <p className="card-category">here is a order list</p>
                                            </div>
                                            <div className="col-2">
                                                <Link  to="/user-add">
                                                    <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                                        <i className="material-icons">note_add</i>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                        <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                            <thead className=" text-primary">
                                <th>
                                Date
                                </th>
                                <th>
                                Start Time
                                </th>
                                <th>
                                car Type
                                </th>
                                <th>
                                Quatity
                                </th>
                                <th>
                                Name
                                </th>
                                <th>
                                Phone
                                </th>
                                <th>
                                From
                                </th>
                                <th>
                                From Place
                                </th>
                                <th>
                                To
                                </th>
                                <th>
                                To Place
                                </th>
                                <th>
                                NCC
                                </th>
                                <th>
                                Price
                                </th>
                                <th>
                                Action
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                    09/09/2019
                                </td>
                                <td>
                                    09:30
                                </td>
                                <td>
                                    Limo
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    Chị Thuỷ
                                </td>
                                <td>
                                    0352336270
                                </td>
                                <td>
                                    Dalat
                                </td>
                                <td>
                                    red house
                                </td>
                                <td>
                                    hcm
                                </td>
                                <td>
                                    quan 1
                                </td>
                                <td>
                                    ADT
                                </td>
                                <td className="text-primary">
                                    $36,738
                                </td>
                                <td className="td-actions ">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                    </button>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    09/09/2019
                                </td>
                                <td>
                                    09:30
                                </td>
                                <td>
                                    Limo
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    Chị Thuỷ
                                </td>
                                <td>
                                    0352336270
                                </td>
                                <td>
                                    Dalat
                                </td>
                                <td>
                                    red house
                                </td>
                                <td>
                                    hcm
                                </td>
                                <td>
                                    quan 1
                                </td>
                                <td>
                                    ADT
                                </td>
                                <td className="text-primary">
                                    $36,738
                                </td>
                                <td className="td-actions ">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                    </button>
                                </td>
                                </tr><tr>
                                <td>
                                    09/09/2019
                                </td>
                                <td>
                                    09:30
                                </td>
                                <td>
                                    Limo
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    Chị Thuỷ
                                </td>
                                <td>
                                    0352336270
                                </td>
                                <td>
                                    Dalat
                                </td>
                                <td>
                                    red house
                                </td>
                                <td>
                                    hcm
                                </td>
                                <td>
                                    quan 1
                                </td>
                                <td>
                                    ADT
                                </td>
                                <td className="text-primary">
                                    $36,738
                                </td>
                                <td className="td-actions ">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                    </button>
                                </td>
                                </tr><tr>
                                <td>
                                    09/09/2019
                                </td>
                                <td>
                                    09:30
                                </td>
                                <td>
                                    Limo
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    Chị Thuỷ
                                </td>
                                <td>
                                    0352336270
                                </td>
                                <td>
                                    Dalat
                                </td>
                                <td>
                                    red house
                                </td>
                                <td>
                                    hcm
                                </td>
                                <td>
                                    quan 1
                                </td>
                                <td>
                                    ADT
                                </td>
                                <td className="text-primary">
                                    $36,738
                                </td>
                                <td className="td-actions ">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                    </button>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                    09/09/2019
                                </td>
                                <td>
                                    09:30
                                </td>
                                <td>
                                    Limo
                                </td>
                                <td>
                                    5
                                </td>
                                <td>
                                    Chị Thuỷ
                                </td>
                                <td>
                                    0352336270
                                </td>
                                <td>
                                    Dalat
                                </td>
                                <td>
                                    red house
                                </td>
                                <td>
                                    hcm
                                </td>
                                <td>
                                    quan 1
                                </td>
                                <td>
                                    ADT
                                </td>
                                <td className="text-primary">
                                    $36,738
                                </td>
                                <td className="td-actions ">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                    </button>
                                </td>
                                </tr>
                                

                            </tbody>
                            </table>
                        </div>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>
      </div>

            
        )
    }
}

export default Table