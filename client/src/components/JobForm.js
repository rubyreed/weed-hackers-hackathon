import React, {useState} from "react";
import axios from "axios";

const JobForm = (props) => {
  const {id, newestJob, updateJob, title: initialTitle, company: initialCompany, salary: initialSalary} = props

  const[titleState, setTitleState] = useState(initialTitle ? initialTitle : "");
  const[salaryState, setSalaryState] = useState(initialSalary ? initialSalary : "");
  const[companyState, setCompanyState] = useState(initialCompany ? initialCompany : "");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob={title: titleState, salary: salaryState, company: companyState};

    if (id) {
      let response = await axios.put (`/api/jobs/${id}`, newJob);
      updateJob(response.data);
    }
    else {
    let response = await axios.post("/api/jobs", newJob);
    newestJob(response.data)
    };
  };

  return(
    <div>
      <h1 className="update">{id ? "Update" : "New"} Job Form</h1>
      <form onSubmit={handleSubmit}>
      <p>Title:</p>
        <input value = {titleState} onChange = {(e) =>
        setTitleState(e.target.value)}/>
        <p>Company:</p>
        <input value = {companyState} onChange = {(e) =>
        setCompanyState(e.target.value)}/>
        <br/>
        <p>Salary:</p>
        <input value = {salaryState} onChange = {(e) =>
        setSalaryState(e.target.value)}/>
        <br/>
        <button className="button">{id ? "Update" : "Create"} </button>
      </form>
    </div>
  );
};

export default JobForm;