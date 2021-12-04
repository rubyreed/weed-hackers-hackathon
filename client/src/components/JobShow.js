// import react from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from "react-router";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Jobs from './Jobs';
  
// const JobShow = () => {
//     const [jobs, setJobs] = useState([]);
//     const params = useParams();
//     const navigate = useNavigate();
   
//     useEffect(() => {
//         getJobs();
//       }, []);

//       const getJobs = async () => {
//         let res = await axios.get(`/api/jobs/${params.id}`);
//         console.log(res.data)
//         setJobs(res.data);
//       };
      
      
//       const deleteJob = async (id) => {
//         await axios.delete(`/api/jobs/${params.id}}`);
//         navigate('/jobs')
//         };

//       const renderJob = () =>{
//           return (
//             <div key={jobs.id}>
//               <h3>Job Title: {jobs.title}</h3>
//               <p>Company: {jobs.company}</p>
//               <p>Salary: {`$${jobs.salary}`}</p>
//               <form>
//               <button>Edit</button>

//               <button onClick = {()=>{deleteJob(jobs.id)}}>Delete</button>
//               </form>
//             </div>
//           );
//       };

//           return (
//         <div> 
//         {renderJob()}
//         </div>
//       );
//   };
// export default JobShow;