import React from "react";

const Category = (props) => {
  const {name, price, description} = props
  return(
    <div>
      <h1>Category</h1>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Category;