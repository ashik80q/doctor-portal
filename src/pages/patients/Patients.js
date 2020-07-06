import React, { useState, useEffect } from 'react';
import Sidebar from '../dashboard/Sidebar/Sidebar';
import Loading from '../../uttiles/Loading';
import AllPatients from './AllPatients';



const Patients = () => {
    const [patients, setPatients] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() =>{
        const getTableData = async () =>{
            setLoading(true);
            await fetch('https://limitless-savannah-61989.herokuapp.com/appointment')
            .then(res => res.json())
            .then(data =>{
                setPatients(data);
                setLoading(false)
            }).catch( error =>{
                setLoading(false);
            })
        }
        getTableData()
    },[])
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content-wrapper">
                    <h1 className="h2 md-5 p-2">All Patients</h1>
                    {isLoading ? <Loading/>: <AllPatients patients={patients} /> }
                </main>
            </div>
            
        </div>
    );
};

export default Patients;