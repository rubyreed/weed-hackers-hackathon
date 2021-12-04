import React, {useState} from "react";
import {Link} from "react-router-dom";
import JobForm from "./JobForm";

const Job = (props) => {
  const {id, title, company, salary, updateJob} = props

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return(
    <div>
      <h1>Job</h1>
      <p>ID:{id} </p>
      <p>Title: {title}</p>
      <p>Company: {company}</p>
      <p>Salary: {salary}</p>
      {/* work on this with Mike later to link up items
      <Link to={`/categories/${id}`}>View</Link> */}
      <button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </button>
      {showForm && <JobForm id = {id} title = {title} company = {company} salary={salary} updateJob = {updateJob}/>}
    </div>
  );
};

export default Job;