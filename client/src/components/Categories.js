import React, {useState, useEffect} from "react";
import Category from "./Category";
import axios from "axios";
import CategoryForm from "./CategoryForm";

const Categories = () => {
  const [showNewForm, setShowNewForm] = useState(false);
const [categories, setCategories] = useState([]);

useEffect(() => {
  console.log("mounted");
  getCategories();
},[]);

const getCategories = async() => {
  let response = await axios.get("/api/categories");
  setCategories(response.data)
};

const toggleNewForm = () => {
  setShowNewForm(!showNewForm);
};

const updateCategory = (changedCategory) => {
  let updatedCategories = categories.map((category) => (category.id === changedCategory.id ? changedCategory : category));
setCategories(updatedCategories)
};

const deleteCategory = async(id)=>{
  let response = await axios.delete(`/api/categories/${id}`);
  let filteredCategories = categories.filter((category) => category.id !==id);
  setCategories(filteredCategories);
}

const renderCategories = () => {
  if (categories.length === 0) {
    return <p>No Categories</p>
  }
  return categories.map((category) => {
    return <Category key = {category.id}{...category} deleteCategory = {deleteCategory} updateCategory={updateCategory}/>;
  });
};

const displayNewCategory = (category) => {
  setCategories([category,...categories])
};

  return (
    <div>
      <h1 className = "categories_header">Categories</h1>
      {renderCategories()}
      {showNewForm && <CategoryForm newestCategory = {displayNewCategory} updateCategory = {updateCategory}/>}
      <button className="add_button" onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "Add New Category"}</button> 
    </div>
  );
};

export default Categories;