import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { item, category, deleteItem } = props
  return (
    <div className = "card">
      <h3>Item: {item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      <Link to={`/categories/${category.id}/items/${item.id}`}>
        <button className = "button" style = {{marginRight: "5px"}}>View</button>
      </Link>
      <Link to={`/categories/${category.id}/items/${item.id}/edit`}>
        <button className = "button" style = {{marginRight: "5px"}}>Update</button>
      </ Link>
      <button className = "button" onClick = {()=>deleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default Item;