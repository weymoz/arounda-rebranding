import React, { Component } from 'react';
import style from './style.scss';


import { Link } from 'react-router-dom';

export default class Works extends Component {
    render() {
        const { worksData } = this.props;
        return (
            <div className={style.row}>
                {
                    worksData.map(el => {
                        return (
                            <div key={el.id} className={style.item}>
                                <a href={`${el.link}`} className={`${style.link} stopCursor`} target='_blank'>
                                    <div className={style.image}> <img src={el.image} alt=""/></div>
                                    <div className={style.wrapper}>
                                        <h3 className={style.title}>{el.title}</h3>
                                        <div className={style.desc}>{el.desc}</div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
