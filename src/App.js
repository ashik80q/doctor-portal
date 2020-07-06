import React, { Fragment } from 'react';
import Headers from './Components/Headers/Headers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import HomePage from './pages/home-page/HomePage';
import AppointmentPage from './pages/home-page/Appointment-page/AppointmentPage';
import { UserProvider } from './Components/useAuth';
import AppointmentForm from './pages/AppointmentForm.js/AppointmentForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './Components/Login/Login';
import DashboardAppointmentPage from './pages/dashboard/Appointment/DashboardAppointmentPage';
import Patients from './pages/patients/Patients';
import { toast } from 'react-toastify';
import NotFoundPage from '../src/pages/notFound/NotFoundPage';


toast.configure({
  autoClose: 3000,
  draggable: false,
 
});



function App() {
  return (
    <Fragment>
      <UserProvider>
      
      <Router> 
       
        <Switch>
          <Route exact path="/">
            <Headers/>
            <HomePage/>
          </Route>
          <Route path="/appointment" >
            <Headers/>
            <AppointmentPage/>
          </Route>
          <Route path="/appointmentForm" >
            <AppointmentForm/>
          </Route>
          <PrivateRoute path="/dashboard/doctors">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <DashboardAppointmentPage/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/patients">
           <Patients/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
          <NotFoundPage/>
          </Route>
        </Switch>  
      </Router>
      </UserProvider>
    </Fragment>
  
  );
}

export default App;
