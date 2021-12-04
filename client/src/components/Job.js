import React, {useState} from "react";
import {Link} from "react-router-dom";
import JobForm from "./JobForm";

const Job = (props) => {
  const {id, title, company, salary, updateJob, deleteJob} = props

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const toggleForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  return(
    <div className = "card">
      <h2>Title: {title}</h2>
      <p>ID:{id} </p>
      <p>Company: {company}</p>
      <p>Salary: {salary}</p>
      <button className = "button">
      <Link className = "link" to={`/jobs/${id}/items`}>View</Link>
      </button>
      <button className="button" onClick = {toggleForm}>
        {showUpdateForm ? "Cancel" : "Update"}
      </button>
      {showUpdateForm && <JobForm id = {id} title = {title} company = {company} salary={salary} updateJob={updateJob} deleteJob={deleteJob}/>}
      <button className = "button" onClick={() => deleteJob(id)}>Delete</button>
      <br/>
      
    </div>
  );
};

export default Job;