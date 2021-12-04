import React, { useEffect, useState } from "react";
import axios from "axios";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    getData();
  },[])

  const getData = async ()=> {
    let res = await axios.get(`/api/categories/1/items`)
    setItems(res.data)
    console.log(items)
  };

  return (
    <div>
      <h1>List of Items</h1>
    </div>
  );
};

export default Items;