import React, {useState, useEffect} from "react";
import Job from "./Job";
import axios from "axios";
import JobForm from "./JobForm";

const Jobs = () => {

const [jobs, setJobs] = useState([]);

useEffect(() => {
  console.log("mounted");
  getJobs();
},[]);

const getJobs = async() => {
  let response = await axios.get("/api/jobs");
  setJobs(response.data)
};

const updateJob = (changedJob) => {
  let updatedJobs = jobs.map((job) => (job.id === changedJob.id ? changedJob : job));
setJobs(updatedJobs)
};

const renderJobs = () => {
  if (jobs.length === 0) {
    return <p>No Jobs</p>
  }
  return jobs.map((job) => {
    return <Job key = {job.id}{...job}/>;
  });
};

const displayNewJob = (job) => {
  setJobs([job,...jobs])
};

  return (
    <div>
      <h1>Jobs Here</h1>
      <JobForm newestJob = {displayNewJob} updateJob = {updateJob}/>
      {renderJobs()}
    </div>
  );
};

export default Jobs;


// import react from 'react';
// import axios from 'axios';
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
// import JobForm from './JobForm';

  
// const Jobs = () => {
//   const [jobs, setJobs] = useState([]);
   
//   useEffect(() => {
//       getJobs();
//     }, []);
    
//     const getJobs = async () => {
//       let res = await axios.get("/api/jobs");
//       // console.log(res.data)
//       setJobs(res.data);
//       console.log(jobs)
//     };

//     const renderJobs = () =>{
//       return jobs.map((job)=>{
//         return (
//           <div key={job.id}>
            
//             <Link to={`/jobs/${job.id}`}>
//               <h3>Job Title: {job.title}</h3>
//             </Link>
//               <p>Company: {job.company}</p>
//               <p>Salary: {`$${job.salary}`}</p>
            
//           </div>
//         );
//       });
//     }

//     return (
//       <div>
//         <p> Welcome to the Jobs page! </p>
//         <h4> Add a Job Toggle here </h4>
//         <JobForm { ...jobs}/>
//         <h2>Current Jobs: </h2>
//         {renderJobs()}
//         </div>
//     );
//   };

// export default Jobs;