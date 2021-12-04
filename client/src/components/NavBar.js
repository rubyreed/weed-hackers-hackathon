import {Link} from "react-router-dom"

const NavBar = () => {
  return(
    <div className = "navbar">
      <Link className = "navbar_link" to='/'>Home</Link>
      <Link className = "navbar_link" to='/categories'>Categories</Link>
      <Link className = "navbar_link" to='/jobs'>Jobs</Link>
      <Link className = "navbar_link" to='/about'>About</Link>
    </div>
  );
};

export default NavBar;