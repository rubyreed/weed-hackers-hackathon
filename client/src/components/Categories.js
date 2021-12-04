import React, {useState, useEffect} from "react";
import Category from "./Category";
import axios from "axios";

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

const renderCategories = () => {
  if (categories.length === 0) {
    return <p>No Categories</p>
  }
  return categories.map((category) => {
    return <Category key = {category.id}{...category}/>;
  });
};

  return (
    <div>
      <h1>Categories Here</h1>
      {renderCategories()}
    </div>
  );
};

export default Categories;