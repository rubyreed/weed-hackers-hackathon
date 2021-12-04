import React, {useState, useEffect} from "react";
import axios from "axios";


const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  },[]);
  
  const getArticles = async () => {
    let res = await axios.get("/api/articles");
    setArticles(res.data)
    console.log(res.data)
  };

  return (
    <div>
      <p> {articles.title}</p>
    </div>
  )
}

export default Articles;