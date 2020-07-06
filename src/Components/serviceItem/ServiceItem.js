import React, { useContext } from 'react';
import "./ServiceItem.css";
import { Link } from 'react-router-dom';
import { UserContext } from '../useAuth';

const ServiceItem = ({serviceData}) => {
    const {handleCleaningName} = useContext(UserContext);
    
    const {name,time,available} = serviceData;
    return (
        <div className="col-4 mb-4 mt-4">
          <div className="appointments-item">
            <div className="card py-4 text-center shadow">
                <div className="card-body">
                <h6 className="card-title fwb cp">{name} </h6>
                <h6 className="card-time fwb">{time}</h6>
                <p className="card-subtitle mb-2 mt-2 text-muted">{available}</p>
                <Link to="/appointmentForm" onClick={() =>handleCleaningName(serviceData)} className="btn appointments-item-btn">Book appointment</Link>
               
            </div>
        </div>
        </div>
    </div>
    );
};

export default ServiceItem;