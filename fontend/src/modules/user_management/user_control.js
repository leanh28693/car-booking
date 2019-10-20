import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../config/config";
import { UserDel } from "./user_del";



class UserControl extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            user_list : [],
            department_list: [],
            user_category_list:[]
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount(){
        axios.post(API_URL+'/production/user/getAll.php').then((data)=>{
            this.setState({user_list:data.data})
            console.log('data',data.data)
        })
        axios.get(API_URL+'/production/department/getAll.php').then((data)=>{
            if(data){
                this.setState({department_list:data.data})
                console.log('data',data)
            }
            
        })  
        axios.get(API_URL+'/production/usercategory/getAll.php').then((data)=>{
            if(data != undefined || data != null || data.data.typeof === "object"){
                this.setState({user_category_list:data.data})
                console.log('data',data)
            }
        })     
    }
    handleDelete(id){
        console.log('delete id: ',id)
       if(UserDel(id)){
        alert('successfull')
        this.props.history.replace('/user-management');
       }else{
        alert('error! please contact to Admin')
       }
    }
    render() {
        const user = (this.state.user_list != [])?this.state.user_list.map((row,index) =>{
             return <tr key={index}>
                    <td>
                        {index+1}
                    </td>
                    <td>
                        {row.first_name}
                    </td>
                    <td>
                        {(this.state.department_list != [])?this.state.department_list.map(row2=>{
                            if(row2.id == row.department)
                                return row2.name
                        }):""}
                    </td>
                    <td>
                        {row.username}
                    </td>                              
                    <td className="td-actions ">
                        <Link  to={"/user-edit/"+row.id}>
                            <button type="button" rel="tooltip" title="Edit Task"  className="btn btn-primary btn-link btn-sm">
                            <i className="material-icons">edit</i>
                            </button>
                        </Link>
                            <button type="button" onClick={()=> this.handleDelete(row.id)} rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                <i className="material-icons">close</i>
                            </button> 
                        
                    </td>
                    </tr>
        }):''
        return (
            <div className="content">
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-success">
                                        <div className="row">
                                            <div className="col-10">
                                                <h4 className="card-title ">User Management</h4>
                                                <p className="card-category">User list</p>
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
                                            <tr>
                                                <th>
                                                ID
                                                </th>
                                            
                                            
                                                <th>
                                                Name
                                                </th>
                                            
                                            
                                                <th>
                                                Department
                                                </th>
                                            
                                            
                                                <th>
                                                User
                                                </th>
                                            
                                        
                                                <th>
                                                Action
                                                </th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user}
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                </div>
        )
    }
}

export default UserControl