import React,{Component} from 'react';
import './App.css';
import Dashboard from "./modules/dashboard";
import UserProfile from "./modules/user_profile/user_profile";
import UserControl from "./modules/user_management/user_control";
import Maps from "./modules/maps";
import Notifications from "./modules/notifications";
import Table from "./modules/booking/table";
import Typography from "./modules/typography";
import Icons from "./modules/icons";
import RTL from "./modules/rtl";
import AdminControl from "./modules/admin_control/admin_control";
import Statistic from "./modules/statistic";
import CMS from "./modules/CMS";
import Login from "./modules/login";
import Main from "./main";
import UserAdd from "./modules/user_management/user_add";
import UserEdit from "./modules/user_management/user_edit";
import DepartmentAdd from "./modules/admin_control/department/department_add";
import DepartmentEdit from "./modules/admin_control/department/department_edit";
import DepartureAdd from "./modules/admin_control/departure/departure_add";
import DepartureEdit from "./modules/admin_control/departure/departure_edit";
import ArrivalAdd from "./modules/admin_control/arrival/arrival_add";
import ArrivalEdit from "./modules/admin_control/arrival/arrival_edit";
import NCCAdd from "./modules/admin_control/NCC/NCC_add";
import NCCEdit from "./modules/admin_control/NCC/NCC_edit";
import VehicleAdd from "./modules/admin_control/Vehicle/vehicle_add";
import VehicleEdit from "./modules/admin_control/Vehicle/vehicle_edit";
import BookingAdd from "./modules/booking/booking_add";
import Bg from "./assets/img/sidebar-1.jpg";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Auth from "./components/AuthService";
import axios from "axios";
const auth = new Auth()
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
       auth.getToken() && auth.isTokenExpired(auth.getToken())
      //true
        ? <Main rest={rest} {...props}><Component {...props} /></Main>
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )
class App extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            selected:"dashboard"
        }
        this.setFilter =  this.setFilter.bind(this)
        this.isActive =  this.isActive.bind(this)
    }
    setFilter(filter){
        console.log('setFilter')
        this.setState({selected:filter})
      }
    isActive(value){
        console.log('isActive')
        return ((value===this.state.selected) ?'active':'');
      }
    render() {
        return (
            <BrowserRouter>
                
                <PrivateRoute path='/' exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/user" exact component={UserProfile} />
                <PrivateRoute path="/user-management" exact component={UserControl} />
                <PrivateRoute path="/admin-control" exact component={AdminControl} />
                <PrivateRoute path="/table" exact component={Table}/>
                <PrivateRoute path="/statistics" exact component={Statistic}/>
                <PrivateRoute path="/cms" exact component={CMS}/>
                <PrivateRoute path="/typography" exact component={Typography} />
                <PrivateRoute path="/icons" exact component={Icons} />
                <PrivateRoute path="/maps" exact component={Maps} />
                <PrivateRoute path="/notications" exact component={Notifications} />
                <PrivateRoute path="/rtl" exact component={RTL} />
                <PrivateRoute path="/user-add" exact component={UserAdd} />
                <PrivateRoute path="/user-edit/:id" exact component={UserEdit} />
                <PrivateRoute path="/department-add/" exact component={DepartmentAdd} />
                <PrivateRoute path="/department-edit/:id" exact component={DepartmentEdit} />
                <PrivateRoute path="/departure-add/" exact component={DepartureAdd} />
                <PrivateRoute path="/departure-edit/:id" exact component={DepartureEdit} />
                <PrivateRoute path="/arrival-add/" exact component={ArrivalAdd} />
                <PrivateRoute path="/arrival-edit/:id" exact component={ArrivalEdit} />
                <PrivateRoute path="/NCC-add/" exact component={NCCAdd} />
                <PrivateRoute path="/NCC-edit/:id" exact component={NCCEdit} />
                <PrivateRoute path="/vehicle-add/" exact component={VehicleAdd} />
                <PrivateRoute path="/vehicle-edit/:id" exact component={VehicleEdit} />
                <PrivateRoute path="/booking-add/" exact component={BookingAdd} />
          </BrowserRouter> 
        )
    }
}


export default App;
