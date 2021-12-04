import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { item, category } = props
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <Link to={`/categories/${category.id}/items/${item.id}/edit`}>
        <button>Edit Item</button>
      </ Link>
    </div>
  );
};

export default Item;