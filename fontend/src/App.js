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
import PartnerAdd from "./modules/admin_control/partner/partner_add";
import PartnerEdit from "./modules/admin_control/partner/partner_edit";
import VehicleAdd from "./modules/admin_control/Vehicle/vehicle_add";
import VehicleEdit from "./modules/admin_control/Vehicle/vehicle_edit";
import BookingAdd from "./modules/booking/booking_add";
import BookingEdit from "./modules/booking/booking_edit";
import Bg from "./assets/img/sidebar-1.jpg";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Auth from "./components/AuthService";
import base64 from "base-64";
import { ToastContainer, toast } from 'react-toastify';
const auth = new Auth()
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
       auth.getCookie() && auth.getToken() && auth.isTokenExpired(auth.getToken())
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
            selected:"dashboard",
            decoded:{"id":"0","username":"0","email":"0","firstname":"0","lastname":"0","address":"0","phone":"0","department":"0","user_category":0,"token":"0"},
            router_list:[
              {part:'/dashboard',component:Dashboard,user_role:[1,2,3]},
              {part:'/user',component:UserProfile,user_role:[1,2,3]},
              {part:'/user-management',component:UserControl,user_role:[1]},
              {part:'/admin-control',component:AdminControl,user_role:[1,2]},
              {part:'/table',component:Table,user_role:[1,2,3]},
              {part:'/statistics',component:Statistic,user_role:[1]},
              {part:'/cms',component:CMS,user_role:[1]},
              {part:'/typography',component:Typography,user_role:[1]},
              {part:'/icons',component:Icons,user_role:[1]},
              {part:'/maps',component:Maps,user_role:[1]},
              {part:'/notications',component:Notifications,user_role:[1]},
              {part:'/rtl',component:RTL,user_role:[1]},
              {part:'/user-add',component:UserAdd,user_role:[1]},
              {part:'/user-edit/:id',component:UserEdit,user_role:[1]},
              {part:'/department-add/',component:DepartmentAdd,user_role:[1,2]},
              {part:'/department-edit/:id',component:DepartmentEdit,user_role:[1,2]},
              {part:'/departure-add/',component:DepartureAdd,user_role:[1,2]},
              {part:'/departure-edit/:id',component:DepartureEdit,user_role:[1,2]},
              {part:'/arrival-add/',component:ArrivalAdd,user_role:[1,2]},
              {part:'/arrival-edit/:id',component:ArrivalEdit,user_role:[1,2]},
              {part:'/NCC-add/',component:NCCAdd,user_role:[1,2]},
              {part:'/NCC-edit/:id"',component:NCCEdit,user_role:[1,2]},
              {part:'/partner-add/',component:PartnerAdd,user_role:[1,2]},
              {part:'/partner-edit/:id',component:PartnerEdit,user_role:[1,2]},
              {part:'/vehicle-add/',component:VehicleAdd,user_role:[1]},
              {part:'/vehicle-edit/:id',component:VehicleEdit,user_role:[1]},
              {part:'/booking-add/',component:BookingAdd,user_role:[1,2,3]},
              {part:'/booking-edit/:id',component:BookingEdit,user_role:[1,2]}
            ]
        }
        this.setFilter =  this.setFilter.bind(this)
        this.isActive =  this.isActive.bind(this)
    }
    componentDidMount(){
      if(auth.getToken())
        this.setState({decoded: JSON.parse(base64.decode(auth.getToken()))})
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
        let router = this.state.router_list.map((row,index) =>{
          return (row.user_role.indexOf(parseInt(this.state.decoded.user_category)) !== -1 )?<PrivateRoute key={index} path={row.part} exact component={row.component} />:''
        })
        console.log(router)
        return (
            <BrowserRouter>
                <ToastContainer />
                <Route path="/login" exact component={Login} />
                {router}
                <PrivateRoute path="/" exact component={UserProfile} />
                {/* <PrivateRoute path='/' exact component={Dashboard} /> */}
                {/*
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
                <PrivateRoute path="/partner-add/" exact component={PartnerAdd} />
                <PrivateRoute path="/partner-edit/:id" exact component={PartnerEdit} />
                <PrivateRoute path="/vehicle-add/" exact component={VehicleAdd} />
                <PrivateRoute path="/vehicle-edit/:id" exact component={VehicleEdit} />
                <PrivateRoute path="/booking-add/" exact component={BookingAdd} />
                <PrivateRoute path="/booking-edit/:id" exact component={BookingEdit} /> */}
          </BrowserRouter> 
        )
    }
}


export default App;
