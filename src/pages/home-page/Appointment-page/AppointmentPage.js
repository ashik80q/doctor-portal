import React, { useState, useEffect, useContext } from 'react';
import Calendar from "react-calendar";
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import './appointment.style.css';
import "react-calendar/dist/Calendar.css";
import HeroContent from '../../../Components/hero-content/HeroContent';
import Service from '../../../Components/Service/Service';
import { UserContext } from '../../../Components/useAuth';
// import { connect } from "react-redux";
// import { getAppointmentDate } from "../../../redux/appointment/appointment.action";
// import Alert from '../../../Components/utils/Alert';

const AppointmentPage = () => {
    const [date, setDate] = useState();
 
    const {handleSelectDate} = useContext(UserContext);
     
    useEffect(()=>{
        setDate(new Date())
    },[]);

    useEffect(()=>{
    let FormatDate = `${date ? format(date, 'MMM dd, yyyy', {locale: enGB}):''}`
  
    handleSelectDate(FormatDate);

    },[date])
    
 
  
    return (
        <div className="appointment-page">
            <HeroContent>
                <h1>Appointment</h1>
                
                <Calendar
                  onChange={setDate}
                  value={date}
                />
            </HeroContent>
            <Service/>
        </div>
        
    );
};

export default AppointmentPage;