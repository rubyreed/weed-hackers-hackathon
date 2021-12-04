import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{flexDirection: "column", justifyContent: "center"}}>
      <h1 style={{display: "flex", fontSize: "5em", justifyContent: "center"}}>Home</h1>
      <Link style= {style.link} to="/categories">View all Categories</Link>
      <Link style= {style.link} to="/jobs">View Job Postings</Link>
      <Link style= {style.link} to="/about">Learn about us!</Link>
    </div>
  );
};

export default Home;

const style ={
  link: {
    margin: "auto",
    marginTop: "25px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    maxWidth: "500px",
    fontSize: "3em",
    textDecoration: "none",
    color: "white",
    backgroundColor: "black"
  },
  p: {
    fontSize:"3em",
  }
}