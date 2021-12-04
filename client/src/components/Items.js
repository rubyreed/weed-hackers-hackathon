import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Item from "./Item";

const Items = () => {
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);
  const params=useParams();

  useEffect(()=>{
    getData();
  },[])

  const getData = async ()=> {
    try{
      let res = await axios.get(`/api/categories/${params.id}/items`)
      setItems(res.data)
      let response = await axios.get(`/api/categories/${params.id}`)
      setCategory(response.data)
    } catch (err) {
      alert("error getting data: debug")
    }
  };

  const renderItems = ()=>{
    if (items){
      return items.map((item)=>{
        return(
          <Item key ={item.id} category = { category } item = { item }/>
        )
      });
    } else {}
  }

  return (
    <div>
      <h1>Category: {category.name}</h1>
      {renderItems()}
    </div>
  );
};

export default Items;