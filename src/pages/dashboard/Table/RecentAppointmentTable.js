import React from 'react';
import TableItem from './TableItem';

const RecentAppointmentTable = ({data}) => {
    return (
       <div className="recent-appointments-container mt-4 p-4 bg-white">
           <div className="d-flex justify-content-between">
               <div className="p2">
                   <h2>Recent Appointment</h2>
               </div>
               <div className="p2">
                   <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                       <span data-feather="calendar"></span>
                       This week
                   </button>
               </div>
           </div>
           <table className="table text-center">
               <thead>
                   <tr>
                        <th>Sr. No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Prescription</th>
                        <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                   {data.map((item, i)=> <TableItem item={item} indx={i + 1} key={item._id}/>)}
               </tbody>
           </table>

       </div>
    );
};

export default RecentAppointmentTable;