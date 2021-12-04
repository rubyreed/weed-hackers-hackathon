import React, {useState} from "react";
import {Link} from "react-router-dom";
import CategoryForm from "./CategoryForm";

const Category = (props) => {
  const {id, name, description, updateCategory} = props

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return(
    <div>
      <h1>Category</h1>
      <p>ID: </p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      {/* work on this with Mike later to link up items
      <Link to={`/categories/${id}`}>View</Link> */}
      <button onClick = {toggleForm}>
        {showForm ? "Cancel" : "Update"}
      </button>
      {showForm && <CategoryForm id = {id} name = {name} description = {description} updateCategory = {updateCategory}/>}
    </div>
  );
};

export default Category;