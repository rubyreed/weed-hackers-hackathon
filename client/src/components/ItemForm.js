import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const ItemForm = (props) => {

  const params=useParams()
  const { addItem, toggleForm, updateItem, toggleUpdateForm } = props
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  const [category, setCategory] = useState([]);
  // const navigate = useNavigate();
  // const location=useLocation()

  useEffect(()=>{
    // console.log("state:", location.state)
    console.log(params)
    getData()
  },[])

  const getData = async () => {
    if(props.item) {
      try {
        let res = await axios.get(`/api/categories/${props.item.category_id}`)
        setCategory(res.data)
        // let itemRes = await axios.get(`/api/categories/${props.item.category_id}/items/${location.state.item.id}`)
        setName(props.item.name)
        setPrice(props.item.price)
        setDescription(props.item.description)
      } catch (err) {
        alert("err occured getting data")
      }
    } 
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    let newItem ={name: name, price: price, description: description }
    if (props.item) {try{
      let response = await axios.put(`/api/categories/${props.item.category_id}/items/${props.item.id}`, newItem)
      // console.log(newItem)
      updateItem(response.data)
      toggleUpdateForm()
    } catch (err) {
      alert("error updating item: debug")
    }} else {try{
      let response = await axios.post(`/api/categories/${params.id}/items`, newItem)
      addItem(response.data)
      setName("")
      setPrice("")
      setDescription("")
    } catch (err) {
      alert("error adding item:debug")
    }}
  };

  const handleCancel =() => {
    if(props.item){
      toggleUpdateForm()
    } else {
      toggleForm()
    };
  };

  return (
    <div className="card">
      <h1>{props.item ? "Edit Item Form" : "Add Item Form"}</h1>
      <h3>Category: {category.name}</h3>
      <form onSubmit ={handleSubmit}>
        <p>Name:</p>
        <input required value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>Price:</p>
        <input required value={price} onChange={(e)=>setPrice(e.target.value)}/>
        <p>Description:</p>
        <input required style={{width: "50%"}} value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <br  />
        <button className="button">{props.item ? "Submit Edits" : "Add New Item"}</button>
        <button className ="button" onClick ={()=>{handleCancel()}}>Cancel</button>
      </form>
    </div>
  );
};

export default ItemForm;

