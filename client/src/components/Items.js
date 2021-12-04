import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemForm from "./ItemForm";

const Items = () => {
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false)
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

  const deleteItem = async (id) => {
    await axios.delete(`/api/categories/${category.id}/items/${id}`)
    let filteredItems =(items.filter((item)=>item.id !==id))
    setItems(filteredItems)
  };

  const renderItems = ()=>{
    if (items){
      return items.map((item)=>{
        return(
          <Item key ={item.id} category = { category } item = { item } deleteItem = {deleteItem}/>
        )
      });
    } else {
      return (
        <div>
          <p>No Items here yet!</p>
        </div>
      )
    }
  }

  const toggleForm =()=>{
    setShowNewForm(!showNewForm)
  };

  const addItem = (newItem) => {
    setItems([newItem, ...items])
  }; 

  return (
    <div>
      <h1 className = "items_header">Category: {category.name}</h1>
      {renderItems()}
      {showNewForm && <ItemForm addItem={addItem} toggleForm={toggleForm}/>}
      {showNewForm == false && <button button className="add_button" onClick={()=>toggleForm()}>{showNewForm ? "Cancel" : "Add Item"}</button>}
    </div>
  );
};

export default Items;