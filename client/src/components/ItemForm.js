import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ItemForm = (props) => {

  const params=useParams()
  const { addItem, toggleForm } = props
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    if(params.category_id) {
      try {
        let res = await axios.get(`/api/categories/${params.category_id}`)
        setCategory(res.data)
        let itemRes = await axios.get(`/api/categories/${params.category_id}/items/${params.id}`)
        setName(itemRes.data.name)
        setPrice(itemRes.data.price)
        setDescription(itemRes.data.description)
      } catch (err) {
        alert("err occured getting data")
      }
    } 
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    let newItem ={name: name, price: price, description: description }
    if (params.category_id) {try{
      await axios.put(`/api/categories/${params.category_id}/items/${params.id}`, newItem)
      navigate(`/categories/${params.category_id}/items`)
    } catch (err) {
      alert("error updating item: debug")
    }} else {try{
      await axios.post(`/api/categories/${params.id}/items`, newItem)
      addItem(newItem)
      setName("")
      setPrice("")
      setDescription("")
    } catch (err) {
      alert("error adding item:debug")
    }}
  };

  const handleCancel =() => {
    if(params.category_id){
      navigate(`/categories/${params.category_id}/items`)
    } else {
      toggleForm()
    };
  };

  return (
    <div>
      <h1>{params.category_id ? "Edit Item Form" : "Add Item Form"}</h1>
      <h3>Category: {category.name}</h3>
      <form onSubmit ={handleSubmit}>
        <p>Name:</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Price:</p>
        <input value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <p>Description:</p>
        <input style={{width: "50%"}} value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <br  />
        <button style ={{marginRight: "5px"}}>{params.category_id ? "Submit Edits" : "Add New Item"}</button>
        <button onClick ={()=>{handleCancel()}}>Cancel</button>
      </form>
    </div>
  );
};

export default ItemForm;

