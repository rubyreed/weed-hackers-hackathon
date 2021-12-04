import React, {useState} from "react";
import axios from "axios";

const CategoryForm = (props) => {
  const {newestCategory} = props

  const[nameState, setNameState] = useState("");
  const[descriptionState, setDescriptionState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory={name: nameState, description: descriptionState};

    let response = await axios.post("/api/categories", newCategory);
    newestCategory(response.data)
  };

  return(
    <div>
      <h1>Add/Edit Category</h1>
      <form onSubmit={handleSubmit}>
      <p>Name:</p>
        <input value = {nameState} onChange = {(e) =>
        setNameState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) =>
        setDescriptionState(e.target.value)}/>
        <br/>
        <button>Click to Add New Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;