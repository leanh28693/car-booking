import React, { PureComponent } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import axios from "axios";
import {API_URL} from "../../config/config"; 
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { DepartmentDel } from "./department/department_del";
import { DepartureDel } from "./departure/departure_del";
import { ArrivalDel } from "./arrival/arrival_del";
import { NCCDel } from "./NCC/NCC_del";
import { CarDel } from "./Vehicle/vehicle_del";
class AdminControl extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props) 

        this.state = {
            activeTab: '1',
            department_list: [],
            departure_list:[],
            arrival_list:[],
            car_list:[],
            NCC_list:[]
        }
       this.getDepartment = this.getDepartment.bind(this)
       this.getDeparture = this.getDeparture.bind(this)
       this.getArrival = this.getArrival.bind(this)
       this.getCar = this.getCar.bind(this)
       this.getNCC = this.getNCC.bind(this)
       this.handleDepartmentDelete = this.handleDepartmentDelete.bind(this)
       this.handleDepartureDelete = this.handleDepartureDelete.bind(this)
       this.handleArrivalDelete = this.handleArrivalDelete.bind(this)
       this.handleCarDelete = this.handleCarDelete.bind(this)
       this.handleNCCDelete = this.handleNCCDelete.bind(this)
    }
    componentDidMount(){
        this.getCar()
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    getDepartment(){
        axios.get(API_URL+'/production/department/getAll.php').then((data)=>{
            if(data){
                this.setState({department_list:data.data})
                console.log('departure_list',data.data)
            }
        }) 
    }
    getDeparture(){
        axios.get(API_URL+'/production/Departure/getAll.php').then((data)=>{
            if(data){
                this.setState({departure_list:data.data})
                console.log('Departure',data.data)
            }
        }) 
    }
    getArrival(){
        axios.get(API_URL+'/production/Arrival/getAll.php').then((data)=>{
            if(data){
                this.setState({arrival_list:data.data})
                console.log('Arrival',data.data)
            }
        }) 
    }
    getCar(){
        axios.get(API_URL+'/production/Car/getAll.php').then((data)=>{
            if(data){
                this.setState({car_list:data.data})
                console.log('car',data.data)
            }
        }) 
    }
    getNCC(){
        axios.get(API_URL+'/production/NCC/getAll.php').then((data)=>{
            if(data){
                this.setState({NCC_list:data.data})
                console.log('NCC',data.data)
            }
        }) 
    }
    handleDepartmentDelete(id){
        console.log('delete id: ',id)
        if(DepartmentDel(id)){
            alert('successfull')
            this.props.history.replace('/admin-control');
           }else{
            alert('error! please contact to Admin')
           }
    }
    handleDepartureDelete(id){
        console.log('delete id: ',id)
        if(DepartureDel(id)){
            alert('successfull')
            this.props.history.replace('/admin-control');
           }else{
            alert('error! please contact to Admin')
           }
        //DepartureDel(id)
    }
    handleArrivalDelete(id){
        console.log('delete id: ',id)
        if(ArrivalDel(id)){
            alert('successfull')
            this.props.history.replace('/admin-control');
           }else{
            alert('error! please contact to Admin')
           }
        //ArrivalDel(id)
    }
    handleCarDelete(id){
        console.log('delete id: ',id)
        if(CarDel(id)){
            alert('successfull')
            this.props.history.replace('/admin-control');
           }else{
            alert('error! please contact to Admin')
           }
        //CarDel(id)
    }
    handleNCCDelete(id){
        console.log('delete id: ',id)
        if(NCCDel(id)){
            alert('successfull')
            this.props.history.replace('/admin-control');
           }else{
            alert('error! please contact to Admin')
           }
        //NCCDel(id)
    }
    render() {
        let car = (this.state.car_list != [])?this.state.car_list.map(row =>{
            return <tr key={row.id}>
                        <td>
                            {row.id}
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.supplier}
                        </td>
                        <td>
                            {row.date_create}
                        </td>                            
                        <td className="td-actions ">
                        <Link  to={"/vehicle-edit/"+row.id}>
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                            </button>
                        </Link>    
                            <button type="button" rel="tooltip" onClick={() =>this.handleCarDelete(row.id)} title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                            </button>
                        </td>
                    </tr>
                        
        }):''
        let department = (this.state.department_list != [])?this.state.department_list.map(row =>{
            return <tr key={row.id}>
                        <td>
                            {row.id}
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.date_create}
                        </td>                            
                        <td className="td-actions ">
                        <Link  to={"/department-edit/"+row.id}>
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                            </button>
                        </Link>    
                            <button type="button" onClick={() =>this.handleCarDelete(row.id)} rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                            </button>
                        </td>
                    </tr>
                        
        }):''
        let departure = (this.state.departure_list != [])?this.state.departure_list.map(row =>{
            return <tr key={row.id}>
                        <td>
                            {row.id}
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.date_create}
                        </td>                            
                        <td className="td-actions ">
                        <Link  to={"/departure-edit/"+row.id}>
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                            </button>
                        </Link>       
                            <button type="button" rel="tooltip" onClick={() =>this.handleDepartureDelete(row.id)} title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                            </button>
                        </td>
                    </tr>
                        
        }):''
        let arrival = (this.state.arrival_list != [])?this.state.arrival_list.map(row =>{
            return <tr key={row.id}>
                        <td>
                            {row.id}
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.date_create}
                        </td>                            
                        <td className="td-actions ">
                        <Link  to={"/arrival-edit/"+row.id}>
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                            </button>
                        </Link>    
                            <button type="button" rel="tooltip" onClick={()=>this.handleArrivalDelete(row.id)} title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                            </button>
                        </td>
                    </tr>
                        
        }):''
        let ncc = (this.state.NCC_list != [])?this.state.NCC_list.map(row =>{
            return <tr key={row.id}>
                        <td>
                            {row.id}
                        </td>
                        <td>
                            {row.name}
                        </td>
                        <td>
                            {row.date_create}
                        </td>                            
                        <td className="td-actions ">
                        <Link  to={"/ncc-edit/"+row.id}>
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                            </button>
                        </Link>    
                            <button type="button" rel="tooltip" onClick={()=>this.handleNCCDelete(row.id)} title="Remove" className="btn btn-danger btn-link btn-sm">
                            <i className="material-icons">close</i>
                            </button>
                        </td>
                    </tr>
                        
        }):''
        return (
            <div className="content">
                <div className="container-fluid">
                <div>
                    <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1');this.getCar() } }
                        >
                            <button className={this.state.activeTab === '1'?"btn btn-success btn-block":"btn btn-primary btn-block"} onclick="md.showNotification('bottom','left')">
                                Type of Vehicle
                            </button>
                        
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2');this.getDeparture() }}
                        >
                        <button className={this.state.activeTab === '2'?"btn btn-success btn-block":"btn btn-primary btn-block"} onclick="md.showNotification('bottom','center')">Departure Place</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); this.getArrival()}}
                        >
                        <button className={this.state.activeTab === '3'?"btn btn-success btn-block":"btn btn-primary btn-block"} onclick="md.showNotification('bottom','center')">Arrival Place</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => { this.toggle('4');this.getNCC() }}
                        >
                        <button className={this.state.activeTab === '4'?"btn btn-success btn-block":"btn btn-primary btn-block"} onclick="md.showNotification('bottom','center')">NCC</button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: this.state.activeTab === '5' })}
                        onClick={() => {this.toggle('5'); this.getDepartment()}}
                        >
                        <button className={this.state.activeTab === '5'?"btn btn-success btn-block":"btn btn-primary btn-block"} onclick="md.showNotification('bottom','center')">Department</button>
                        </NavLink>
                    </NavItem>
                    
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    <div className="card">
                        <div className="card-header card-header-success">
                                <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title ">Vehicle</h4>
                                            <p className="card-category">Vehicle list</p>
                                        </div>
                                        <div className="col-2">
                                            <Link  to="/vehicle-add">
                                                <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                                    <i className="material-icons">note_add</i>
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                        </div>
                        <Row>
                        <Col sm="12">
                        <div className="card">
                        <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                        <thead className=" text-primary">
                                            <th>
                                            ID
                                            </th>
                                            <th>
                                            Car
                                            </th>
                                            <th>
                                            Supplier
                                            </th>
                                            <th>
                                            </th>
                                            <th>
                                            Action
                                            </th>
                                        </thead>
                                        <tbody>
                                            {car}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    </div>
                        </Col>
                        </Row>
                    </div>
                    </TabPane>
                    <TabPane tabId="2">
                    <div className="card">
                        <div className="card-header card-header-success">
                                <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title ">Vehicle</h4>
                                            <p className="card-category">Vehicle list</p>
                                        </div>
                                        <div className="col-2">
                                            <Link  to="/departure-add">
                                                <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                                    <i className="material-icons">note_add</i>
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                        </div>
                        <Row>
                        <Col sm="12">
                        <div className="card">
                        <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                        <thead className=" text-primary">
                                            <th>
                                            ID
                                            </th>
                                            <th>
                                            Name
                                            </th>
                                            <th>
                                            Description
                                            </th>
                                            <th>
                                            Action
                                            </th>
                                        </thead>
                                        <tbody>
                                            {departure}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    </div>
                        </Col>
                        </Row>
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                    <div className="card">
                        <div className="card-header card-header-success">
                                <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title ">Vehicle</h4>
                                            <p className="card-category">Vehicle list</p>
                                        </div>
                                        <div className="col-2">
                                            <Link  to="/arrival-add">
                                                <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                                    <i className="material-icons">note_add</i>
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                        </div>
                        <Row>
                        <Col sm="12">
                        <div className="card">
                        <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                        <thead className=" text-primary">
                                            <th>
                                            ID
                                            </th>
                                            <th>
                                            Name
                                            </th>
                                            <th>
                                            Description
                                            </th>
                                            <th>
                                            Action
                                            </th>
                                        </thead>
                                        <tbody>
                                            {arrival}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    </div>
                        </Col>
                        </Row>
                        </div>
                    </TabPane>
                    <TabPane tabId="4">
                    <div className="card">
                        <div className="card-header card-header-success">
                                <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title ">Vehicle</h4>
                                            <p className="card-category">Vehicle list</p>
                                        </div>
                                        <div className="col-2">
                                            <Link  to="/ncc-add">
                                                <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                                    <i className="material-icons">note_add</i>
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                        </div>
                        <Row>
                        <Col sm="12">
                        <div className="card">
                        <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                        <thead className=" text-primary">
                                            <th>
                                            ID
                                            </th>
                                            <th>
                                            Name
                                            </th>
                                            <th>
                                            Description
                                            </th>
                                            <th>
                                            Action
                                            </th>
                                        </thead>
                                        <tbody>
                                            
                                            {ncc}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    </div>
                        </Col>
                        </Row>
                        </div>
                    </TabPane>
                    <TabPane tabId="5">
                    <div className="card">
                        <div className="card-header card-header-success">
                                <div className="row">
                                        <div className="col-10">
                                            <h4 className="card-title ">Vehicle</h4>
                                            <p className="card-category">Vehicle list</p>
                                        </div>
                                        <div className="col-2">
                                            <Link  to="/department-add">
                                                <button type="button" rel="tooltip" title="add" className="btn btn-primary card-img-right">
                                                    <i className="material-icons">note_add</i>
                                                </button>
                                            </Link>
                                        </div>
                                </div>
                        </div>
                        <Row>
                        <Col sm="12">
                        <div className="card">
                        <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                        <thead className=" text-primary">
                                            <th>
                                            ID
                                            </th>
                                            <th>
                                            Name
                                            </th>
                                            <th>
                                            Date Create
                                            </th>
                                            <th>
                                            Action
                                            </th>
                                        </thead>
                                        <tbody>
                                            {department}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                    </div>
                        </Col>
                        </Row>
                        </div>
                    </TabPane>
                    </TabContent>
                </div>
                
            </div>
      </div>
            
        )
    }
}

export default AdminControl