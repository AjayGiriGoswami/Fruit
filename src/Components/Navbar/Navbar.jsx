import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import List from "../Pages/Api";

function Navbar({size ,setshow}) {
  const [isOpen, setIsOpen] = useState(false);
  const[MenuData,setMenuData]=useState(List)
  console.log(MenuData)
  const filteritem=(Categories)=>{
    const updatelist=List.filter((curElem)=>{
      return curElem.Categories === Categories
    })
    setMenuData(updatelist)
  }

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`topnav ${isOpen ? "responsive" : ""}`}>
          <Link href="#home" className="active" onClick={()=> setshow(false)}> Shop&nbsp;
          <i class="fa-solid fa-shop" onClick={()=> setshow(false) }></i>
          </Link>
          <Link href="#contact"> User&nbsp;
          <i class="fa-solid fa-user" onClick={()=> filteritem ("Fruits")}></i>
          </Link>
          <Link href="#contact" className="cart" onClick={()=> setshow(true)}> Cart&nbsp;
          <i class="fa-solid fa-cart-shopping" onClick={()=> setshow(true)}></i>
          <span>{size}</span>
          </Link>
          <Link href="#" className="icon" onClick={toggleNav}>
            <i class="fa-solid fa-bars"></i>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
