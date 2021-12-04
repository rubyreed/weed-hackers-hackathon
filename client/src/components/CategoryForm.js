import React, {useState} from "react";
import axios from "axios";

const CategoryForm = (props) => {
  const {newestCategory} = props

  const[nameState, setNameState] = useState("");
  const[priceState, setPriceState] = useState("");
  const[descriptionState, setDescriptionState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    constNewCategory={name: nameState, price: priceState, description: descriptionState};

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
        <p>Price:</p>
        <input value = {priceState} onChange = {(e) =>
        setPriceState(e.target.value)}/>
        <p>Description:</p>
        <input value = {nameDescription} onChange = {(e) =>
        setDescriptionState(e.target.value)}/>
        <br/>
        <button>Click to Add New Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;