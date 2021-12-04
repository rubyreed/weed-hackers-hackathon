import React, {useState} from "react";
import {Link} from "react-router-dom";
import CategoryForm from "./CategoryForm";

const Category = (props) => {
  const {id, name, description, updateCategory, deleteCategory} = props

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };


  return(
    <div className = "card">
      <h1>Category</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <Link to={`/categories/${id}/items`}>View</Link>
      <button onClick = {toggleUpdateForm}>
        {showUpdateForm ? "Cancel" : "Update"}
      </button>
      {showUpdateForm && <CategoryForm id = {id} name = {name} description = {description} updateCategory = {updateCategory} deleteCategory={deleteCategory}/>}
    <button onClick={() => deleteCategory(id)}>Delete</button>
    </div>
  );
};

export default Category;