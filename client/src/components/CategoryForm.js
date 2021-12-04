import React, {useState} from "react";
import axios from "axios";

const CategoryForm = (props) => {
  const {id, newestCategory, updateCategory, name: initialName, description: initialDescription} = props

  const[nameState, setNameState] = useState(initialName ? initialName : "");
  const[descriptionState, setDescriptionState] = useState(initialDescription ? initialDescription : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory={name: nameState, description: descriptionState};

    if (id) {
      let response = await axios.put (`/api/categories/${id}`, newCategory);
      updateCategory(response.data);
    }
    else {
    let response = await axios.post("/api/categories", newCategory);
    newestCategory(response.data)
    };
  };

  return(
    <div>
      <h1>{id ? "Update" : "New"}Category Form</h1>
      <form onSubmit={handleSubmit}>
      <p>Name:</p>
        <input value = {nameState} onChange = {(e) =>
        setNameState(e.target.value)}/>
        <p>Description:</p>
        <input value = {descriptionState} onChange = {(e) =>
        setDescriptionState(e.target.value)}/>
        <br/>
        <button>{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default CategoryForm;