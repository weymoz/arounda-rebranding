import React, { Component } from 'react'
import Burger from '@assets/svg/menu.svg';
import style from './style.scss'

const Nav = ({toggleMenu, openMenu})  => {
        return (
            <nav>
                <ul className={`${style.menu} ${openMenu ? style.active : ""}`}>
                    <li>
                        <a href="#">
                            Works
                        </a>   
                    </li>
                    <li>
                        <a href="#">
                            Contact
                        </a>   
                    </li>
                    <li className={style.btnWrapper}>
                        <button className={style.btn} onClick={toggleMenu}>
                            <Burger/>
                        </button>
                    </li>
                </ul>
            </nav>
        )
}

export default Nav;