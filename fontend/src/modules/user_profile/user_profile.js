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
              department: "1",
              email: "leanh@gmail.com",
              firstname: "anh",
              id: "1",
              lastname: "le",
              phone: "0952336289",
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjIwMDB9.x2bH1f9ZpeFd-NDx8kimtHXiQ1b4WqkjBpuhQbhCel8",
              username: "admin",
            },
            department_list: [],
            user_category_list:[]
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
      let auth = new Auth()
      this.setState({user:JSON.parse(base64.decode(auth.getToken()))})
    }
    render() {
        let department = (this.state.department_list != [])?this.state.department_list.map(row2=>{
          if(this.state.user.department === row2.id)
              return row2.name
      }):""
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
                                      <input type="text" className="form-control" value={department} disabled/>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label className="bmd-label-floating">User Role</label>
                                      <input type="text" className="form-control" value={department} disabled/>
                                    </div>
                                  </div>
                                  
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label>About Me</label>
                                      <div className="form-group">
                                        <label className="bmd-label-floating"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                      </div>
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
                              <h6 className="card-category text-gray">CEO / Co-Founder</h6>
                              <h4 className="card-title">Alec Thompson</h4>
                              <p className="card-description">
                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                              </p>
                              <a href="#pablo" className="btn btn-primary btn-round">Follow</a>
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