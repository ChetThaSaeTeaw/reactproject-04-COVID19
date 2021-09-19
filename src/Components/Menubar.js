import React , { useState } from 'react'
import { MenuList } from './Menulist';
import { NavLink } from 'react-router-dom';
import './Menubar.css';


function Menubar() {
    const [ clicked , setClicked ] = useState(false);
    const menuList = MenuList.map(({ title , url }, index) => {
        return (
            <li key={index}>
                <NavLink to={url} exact activeClassName="active">{title}</NavLink>
            </li>
        )
    })
    return (
        <nav className="Menu-box">
            <div className="logo">
                COVID-<span>19</span>
            </div>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
               {clicked ? <i class="fas fa-times"></i> :  <i class="fas fa-bars"></i>}
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
        </nav>
    )
}

export default Menubar;
