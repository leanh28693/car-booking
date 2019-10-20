import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {API_URL} from "../../../config/config";
import axios from "axios";
class Caredit extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            user: [{"id":"0","name":"","description":"","supplier":""}]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        
        if(this.props.match != undefined){
            axios.post(API_URL+'/production/Car/editCar.php',{
                id: this.props.match.params.id}
                ).then((data)=>{
                if(data){
                    this.setState({user:data.data})
                    console.log('data',data.data)
                }
                
            })
        }else{
            this.props.history.replace('/user-control');
        }
        
    } 
    handleChange(e){
        console.log('target',e.target.name)
        this.setState({user:[{...this.state.user[0],[e.target.name]:e.target.value}]})
       
    }
    handleSubmit(e){
        e.preventDefault();
        //console.log('e',e.target.password.value)
        axios.post(API_URL+'/production/Car/updateCar.php',{
            id: e.target.id.value,
            name: e.target.name.value,
            description: e.target.description.value,
            supplier:e.target.supplier.value
          }).then((data)=>{
                console.log('data',data)
                if(data.data.message == '1'){
                    alert('successfull')
                    this.props.history.replace('/admin-control');
                }else{
                    alert('server error')
                }
        })
    }
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                    <div className="col-xs-12 col-sm-8 col-md-8 bg-white">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                    <h3 className="panel-title">Update user information</h3>
                                    </div>
                                    <div className="panel-body">
                                    <form role="form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="id" id="id" className="form-control input-sm " style={{display:'none'}} onChange={this.handleChange} value={this.state.user[0].id} placeholder="id"/>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control input-sm" onChange={this.handleChange} value={this.state.user[0].name} placeholder="Car Name"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="supplier" id="supplier" className="form-control input-sm" onChange={this.handleChange} value={this.state.user[0].supplier} placeholder="Car Name"/>
                                                </div>
                                            </div>  
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control input-sm"  rows="5" name="description" id="description" onChange={this.handleChange} value={this.state.user[0].description} placeholder="Description"/>
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

export default Caredit