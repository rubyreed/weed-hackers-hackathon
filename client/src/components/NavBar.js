import {Link} from "react-router-dom"

const NavBar = () => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/categories'>Categories</Link>
      <Link to='/jobs'>Jobs</Link>
    </div>
  );
};

export default NavBar;