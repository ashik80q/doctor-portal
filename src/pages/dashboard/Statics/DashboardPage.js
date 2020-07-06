import React, { useState, useEffect } from 'react';
import TopAria from './TopAria';
import Loading from '../../../uttiles/Loading';
import RecentAppointmentTable from '../Table/RecentAppointmentTable';



const DashboardPage = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
       fetch('https://limitless-savannah-61989.herokuapp.com/appointment')
       .then(res => res.json())
       .then(data => {
           setTableData(data);
           setIsLoading(false)
           
       }).catch(error => {
          setIsLoading(false);
       })
       
    },[])
 
    
    return (
        <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
           <h1 className="h2">Dashboard</h1>
          
        </div>
        <TopAria/>
        { isLoading? <Loading/> : <RecentAppointmentTable data={tableData}/>}
        
        </>
    );
};

export default DashboardPage;