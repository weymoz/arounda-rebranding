import React, { Component } from 'react'
import Burger from '../../assets/svg/menu.svg';
import style from './style.scss'

export default class Nav extends Component {

    render() {
        return (
            <nav>
                <ul className={style.menu}>
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
                    <li>
                        <button>
                            <Burger/>
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}
