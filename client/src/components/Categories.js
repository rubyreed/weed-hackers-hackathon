import React, {useState, useEffect} from "react";
import Category from "./Category";
import axios from "axios";
import CategoryForm from "./CategoryForm";

const Categories = () => {

const [categories, setCategories] = useState([]);

useEffect(() => {
  console.log("mounted");
  getCategories();
},[]);

const getCategories = async() => {
  let response = await axios.get("/api/categories");
  setCategories(response.data)
};

const updateCategory = (changedCategory) => {
  let updatedCategories = categories.map((category) => (category.id === changedCategory.id ? changedCategory : category));
setCategories(updatedCategories)
};

const renderCategories = () => {
  if (categories.length === 0) {
    return <p>No Categories</p>
  }
  return categories.map((category) => {
    return <Category key = {category.id}{...category}/>;
  });
};

const displayNewCategory = (category) => {
  setCategories([category,...categories])
};

  return (
    <div>
      <h1>Categories Here</h1>
      <CategoryForm newestCategory = {displayNewCategory} updateCategory = {updateCategory}/>
      {renderCategories()}
    </div>
  );
};

export default Categories;