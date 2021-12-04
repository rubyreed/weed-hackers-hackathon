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
  };

  const renderArticles = () => {
    if (articles.length === 0) {
      return <p>No Articles</p>
    }
    return articles.map((article) => {
      return (
        <div>
          <h2> Title: {article.title}</h2>
          <h3> Author: {article.author}</h3>
          <h4>Body: {article.body}</h4>
        </div>
      )
    });
  };
  
  return (
    <div>
      <p> {renderArticles()}</p>
    </div>
  )
}

export default Articles;