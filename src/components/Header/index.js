import React, { Component } from 'react'
import Logo from '../Logo';
import Nav from '../Nav';
import style from './style.scss';

export default class Header extends Component {

    render() {
        return (
            <header className={style.header}>
                <div className="container">
                    <div className={style.row}>
                        <Logo />
                        <Nav/>
                    </div>
                </div>
            </header>
        )
    }
}
