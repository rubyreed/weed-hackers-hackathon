import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios"

const ItemShow = () => {
  const [item, setItem]= useState([]);
  const [category, setCategory]=useState([]);
  const params = useParams();

  useEffect(()=>{
    getData();
  },[])

  const getData = async () => {
    if(params.category_id) {
      try {
        let res = await axios.get(`/api/categories/${params.category_id}`)
        setCategory(res.data)
        let itemRes = await axios.get(`/api/categories/${params.category_id}/items/${params.id}`)
        setItem(itemRes.data)
      } catch (err) {
        alert("err occured getting data")
      }
    } 
  };

  return (
    <div classname ="card">
      <h1 classname = "items-header">Category: {category.name}</h1>
      <div>
        <h3>Item Name: {item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ItemShow;