import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { item, category, deleteItem } = props
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <Link to={`/categories/${category.id}/items/${item.id}/edit`}>
        <button style = {{marginRight: "5px"}}>Edit Item</button>
      </ Link>
      <button onClick = {()=>deleteItem(item.id)}>Delete Item</button>
    </div>
  );
};

export default Item;