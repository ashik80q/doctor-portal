import React from 'react';
import SidebarIten from './SidebarIten';

const Sidebar = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <SidebarIten icon="apps" text="Dashboard" path="/dashboard/doctors" />
                    <SidebarIten icon="today" text="Appointment" path="/dashboard/appointment" />
                    <SidebarIten icon="people" text="Patients" path="/dashboard/patients" />
                    <SidebarIten icon="description" text="Prescriptions" path="/dashboard/prescriptions" />
                    <SidebarIten icon="settings" text="Settings" path="/dashboard/settings" />
                </ul>
                <div className="logout-aria">
                <p className="logout-btn d-flex"> <span className="material-icons">
                    trending_flat
                    </span> Log Out</p>
                </div>
                </div>
        </nav>
    );
};

export default Sidebar;