import React from 'react';
import './Dashboard.css'
import Sidebar from './Sidebar/Sidebar';
import DashboardPage from './Statics/DashboardPage';


const Dashboard = () => {
    return (
        <div  className="container-fluid">
            <div className="row">
                <Sidebar/>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 main-content-wrapper">
                 <DashboardPage/>
                </main>

            </div>
            
        </div>
    );
};

export default Dashboard;