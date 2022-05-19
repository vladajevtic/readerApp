import React from 'react'
import { Link } from "react-router-dom";
import style from './NavBar.module.css';
export default function NavBar() {
  return (
      <nav >
        <ul className={style.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MyListPage">MyLists</Link>
          </li>
        </ul>
      </nav>
  );
}
