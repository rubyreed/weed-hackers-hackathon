import react from 'react';
import axios from 'axios';
import React, { useEffect, useState } from "react";
  
const Job = () => {
  const params = useParams();
  const [jobs, setJob] = useState({});
   
  useEffect(() => {
      getJob();
    }, []);
    
    const getJob = async () => {
        let res = await axios.get(`/api/jobs/${params.id}`);
        setJob(res.data);
      } 
    };

    const renderJobs = () => {
      return jobs.map =((job)=>{
        
      })
    }

    return (
      <div> 
        <p> Welcome to the Jobs page! </p>
        <h2> Add Job Toggle here </h2>

      </div>
    );
  };
export default Job;