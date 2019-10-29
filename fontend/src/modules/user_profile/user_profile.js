import React, { PureComponent } from 'react'
import Profileimg from "../../assets/img/faces/marc.jpg";
import Auth from "../../components/AuthService";
import base64 from "base-64";
import {Link } from "react-router-dom";
import axios from "axios";
import {API_URL} from "../../config/config"; 
class User_profile extends PureComponent {
    static propTypes = {}
    
    constructor(props) {
        super(props)
        this.state = {
            user : {
              address: "test",
              department: "0",
              user_category:"0",
              email: "leanh@gmail.com",
              firstname: "anh",
              id: "1",
              lastname: "le",
              phone: "0952336289",
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjIwMDB9.x2bH1f9ZpeFd-NDx8kimtHXiQ1b4WqkjBpuhQbhCel8",
              username: "admin",
            },
            department_list: [{id: "0", name: "", description: "", date_create: "2019-10-11 19:25:06"}],
            user_category_list:[{id: "0", name: "", description: "", date_create: "2019-10-11 19:25:06"}]
        }
    }
    componentDidMount(){
      axios.post(API_URL+'/production/user/getAll.php').then((data)=>{
        this.setState({user_list:data.data})
        console.log('data',data.data)
    })
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
      let auth = new Auth()
      this.setState({user:JSON.parse(base64.decode(auth.getToken()))})
    }
    getName = (array,value) => {
      let result = null

       array.map(row2=>{
        if(value === row2.id){
          result = row2.name
        }
    })
    return result
    
    }
    render() {
      let department = this.getName(this.state.department_list,this.state.user.department)
      let user_category =  this.getName(this.state.user_category_list,this.state.user.user_category)
        return (
            <div className="content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="card">
                            <div className="card-header card-header-primary">
                              <h4 className="card-title">Edit Profile</h4>
                              <p className="card-category">Complete your profile</p>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="row">
                                  <div className="col-md-5">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Company (disabled)</label>
                                      <input type="text" className="form-control" value={this.state.user.id} disabled/>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Username</label>
                                      <input type="text" className="form-control" value={this.state.user.username} disabled/>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Email address</label>
                                      <input type="email" className="form-control" value={this.state.user.email} disabled/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Fist Name</label>
                                      <input type="text" className="form-control" value={this.state.user.firstname} disabled/>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Last Name</label>
                                      <input type="text" className="form-control" value={this.state.user.lastname} disabled/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Adress</label>
                                      <input type="text" className="form-control" value={this.state.user.address} disabled/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">Department</label>
                                      <input type="text" className="form-control" value={department} disabled />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">User Role</label>
                                      <input type="text" className="form-control" value={user_category} disabled />
                                    </div>
                                  </div>
                                  
                                </div>
                                
                                <Link  to={"/user-edit/"+this.state.user.id}>
                                  <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                                </Link>
                                <div className="clearfix"></div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="card card-profile">
                            <div className="card-avatar">
                              <a href="#pablo">
                                <img className="img" src={Profileimg} />
                              </a>
                            </div>
                            <div className="card-body">
                              <h6 className="card-category text-gray"></h6>
                              <h4 className="card-title">{this.state.user.firstname+ ' '+this.state.user.lastname}</h4>
                              <p className="card-description">
                              {department}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

            
        )
    }
}

export default User_profile