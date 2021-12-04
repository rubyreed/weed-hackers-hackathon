import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="home">Welcome!</h1>
      <Link className="home_link" to="/categories">View all Categories</Link>
      <br/>
      <Link className="home_link" to="/jobs">View Job Postings</Link>
      <br/>
      <Link className="home_link" to="/about">Learn about us!</Link>
    </div>
  );
};

export default Home;

