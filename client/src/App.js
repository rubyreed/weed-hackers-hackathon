import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Categories from './components/Categories';
import CategoryShow from "./components/CategoryShow";
import CategoryForm from "./components/CategoryForm";
import NavBar from "./components/NavBar";
import Jobs from "./components/Jobs";
import JobShow from "./components/JobShow";
import JobForm from "./components/JobForm";
import Items from "./components/Items";
import ItemShow from "./components/ItemShow";
import ItemForm from "./components/ItemForm";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/about" element = {<About />}/>
      <Route path = "/categories" element = {<Categories />}/>
      <Route path = "/categories/:id" element = {<CategoryShow />}/>
      <Route path = "/categories/:id/edit" element = {<CategoryForm />}/>
      <Route path = "/jobs" element = {<Jobs />}/>
      <Route path = "/jobs/:id" element = {<JobShow />}/>
      <Route path = "/jobs/:id/edit" element = {<JobForm />}/>
      <Route path = "/categories/:id/items" element = {<Items />}/>
      <Route path = "/categories/:category_id/items/:id" element = {<ItemShow />}/>
      <Route path = "/categories/:category_id/items/:id/edit" element = {<ItemForm />}/>
      </Routes>
      <footer styleName="footer">© Copyright 2021 DPL WeedHackers</footer>
    </div>
  );
}

export default App;
