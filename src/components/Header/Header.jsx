import React from 'react';
import "./style.css"
import logo from "../../assets/img/logoSU.png";
import searchIcon from "../../assets/img/search.png";

const Header = () => {
  return (
    <div>
        <header>
         <div class="header">
           <div class="header_conteiner">
             <div class="logo">
               <a href="./index.html">
                 <img src={logo} alt="" />
               </a>
             </div>
             <div class="search_block">
               <input type="search" placeholder="searching..." />
               <div class="search_icon">
                 <img src={searchIcon} alt="" />
               </div>
             </div>
           </div>
         </div>
        </header>
    </div>
  )
}

export default Header;
