import React, {useState} from "react";
import axios from "axios";

const ArticleForm = (props) => {
  const { addArticle } = props

  const[title, setTitle] = useState( "");
  const[author, setAuthor] = useState( "");
  const[body, setBody] = useState( "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle={title: title, author: author, body: body};
    let response = await axios.post("/api/articles", newArticle);
    addArticle(response.data)
  };

  return(
    <div>
      <h1  className="update">New Article Form</h1>
      <form onSubmit={handleSubmit}>
      <p>Name:</p>
        <input value = {title} onChange = {(e) =>
        setTitle(e.target.value)}/>
        <p>Author:</p>
        <input value = {author} onChange = {(e) =>
        setAuthor(e.target.value)}/>
        <p>Body:</p>
        <input value = {body} onChange = {(e) =>
        setBody(e.target.value)}/>
        <br/>
        <button className = "button">Create Article</button>
      </form>
    </div>
  );
};

export default ArticleForm;