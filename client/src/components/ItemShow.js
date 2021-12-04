import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios"

const ItemShow = () => {
  const [item, setItem]= useState([]);
  const [category, setCategory]=useState([]);
  const params = useParams();
  const navigate = useNavigate();

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

  const navigateTo = () => {
    navigate(`/categories/${params.category_id}/items`)
  };

  return (
    <div className ="card">
      <h1 className = "items-header">Category: {category.name}</h1>
      <div>
        <h3>Item Name: {item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>{item.description}</p>
        <button onClick={()=>navigateTo()}>Return to all items</button>
      </div>
    </div>
  );
};

export default ItemShow;