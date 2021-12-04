import React, { useState } from "react";
import { useParams } from "react-router";

const ItemForm = () => {

  const params=useParams()
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);


  return (
    <div>
      <h1>{params.category_id ? "Edit Item Form" : "Add Item Form"}</h1>
    </div>
  );
};

export default ItemForm;