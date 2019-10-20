import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
import {API_URL} from "../../../config/config";
class Caradd extends PureComponent {
    static propTypes = {}

    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleSubmit =  this.handleSubmit.bind(this)
    }
    componentDidMount(){
        
    }
    handleSubmit(e){
        e.preventDefault();
        
        axios.post(API_URL+'/production/Car/addCar.php',{
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
                                    <h3 className="panel-title">Please Enter Car information</h3>
                                    </div>
                                    <div className="panel-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control input-sm" placeholder="Car Name"/>
                                                </div>
                                            </div> 
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="supplier" id="supplier" className="form-control input-sm" placeholder="Supplier"/>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control input-sm"  rows="5" name="description" id="description" placeholder="Description"/>
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

export default Caradd