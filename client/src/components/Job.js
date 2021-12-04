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
    <div>
      <h2>Title: {title}</h2>
      <p>ID:{id} </p>
      <p>Company: {company}</p>
      <p>Salary: {salary}</p>
      <button onClick = {toggleForm}>
        {showUpdateForm ? "Cancel" : "Update"}
      </button>
      {showUpdateForm && <JobForm id = {id} title = {title} company = {company} salary={salary} updateJob={updateJob} deleteJob={deleteJob}/>}
      <button onClick={() => deleteJob(id)}>Delete</button>
      <br/>
      <Link to={`/jobs/${id}/items`}>View</Link>
    </div>
  );
};

export default Job;