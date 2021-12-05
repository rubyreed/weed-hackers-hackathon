import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemForm from "./ItemForm";

const Item = (props) => {
  const { item, category, deleteItem, updateItem } = props
  const [showUpdateForm, setShowUpdateForm] = useState(false)

  const toggleUpdateForm =() => {
    setShowUpdateForm(!showUpdateForm)
  };

  return (
    <div className = "card">
      <h3>Item: {item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      <Link to={`/categories/${category.id}/items/${item.id}`}>
        <button className = "button" style = {{marginRight: "5px"}}>View</button>
      </Link>
      {showUpdateForm && <ItemForm item = {item} updateItem = {updateItem} toggleUpdateForm={toggleUpdateForm}/>}
      {showUpdateForm === false && <button className="button" onClick={()=>{toggleUpdateForm()}}>Update Item</button>}
      {/* <Link to={`/categories/${category.id}/items/${item.id}/edit`} state={{item}}>
        <button className = "button" style = {{marginRight: "5px"}}>Update</button>
      </ Link> */}
      <button className = "button" onClick = {()=>deleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default Item