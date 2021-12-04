import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios"

const JobShow = () => {
  const [job, setJob]= useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getData();
  },[])

  const getData = async () => {
      try {
        let res = await axios.get(`/api/jobs/${params.id}`)
        setJob(res.data)
      } catch (err) {
        alert("err occured getting data")
      }
  };

  const navigateTo = () => {
    navigate(`/jobs`)
  };

  return (
    <div className ="card">
      <h1 className = "items-header">Please Apply! We Need Help!</h1>
      <div>
        <h3>Position Title: {job.title}</h3>
        <p>Salary: ${job.salary}</p>
        <p>Company: {job.company}</p>
        <button onClick={()=>navigateTo()}>Return to all Jobs</button>
      </div>
    </div>
  );
};

export default JobShow;