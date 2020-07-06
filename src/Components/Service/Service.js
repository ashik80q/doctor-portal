import React, { useState, useEffect, useContext } from 'react';
import './Service.css';
import ServiceItem from '../serviceItem/ServiceItem';
import { UserContext } from '../useAuth';
import Loading from '../../uttiles/Loading';


const Service = () => {
  
     const [ServiceData, setServiceData] = useState([]);
     const {selectTedDate} = useContext(UserContext);
     const [isLoading, setIsLoading] = useState(false);
     
     useEffect(()=>{
        setIsLoading(true)
        fetch('https://limitless-savannah-61989.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{
          
          setServiceData(data);
          setIsLoading(false)
          
        }).catch(error =>{
            alert(error.message);
            setIsLoading(false)
        })

     },[]);
     


     if(isLoading){
         return <Loading/>
     }
  
    
    return (
        <div className="service-section">
            <div className="container">
             <h1>Available Appointments on {selectTedDate}</h1>
                <div className="services">
                    <div className="row">
                        {
                         isLoading? <Loading/> : ServiceData.map(serviceData => <ServiceItem
                              key ={serviceData.id}
                              serviceData ={serviceData}
                            ></ServiceItem>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Service;