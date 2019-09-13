import React, { Component } from 'react';
import style from './style.scss';

import { Link } from 'react-router-dom';

export default class Works extends Component {
    render() {
        const data = [
            {
                id: 0,
                image: './assets/images/bold.jpg',
                title: 'Bold',
                desc: 'UX Design, UI Design, Development',
                link: '/'
            },
            {
                id: 1,
                image: './assets/images/gigzi.jpg',
                title: 'Gigzi',
                desc: 'Strategy, UX Design, UI Design, Content, Development',
                link: 'https://gigzi.com/'
            },
            {
                id: 2,
                image: './assets/images/velonto.jpg',
                title: 'Velonto',
                desc: 'Strategy, UX Design, UI Design, Content, Development',
                link: 'https://velonto.at/'
            },
            {
                id: 3,
                image: './assets/images/metricly.jpg',
                title: 'Metricly',
                desc: 'UX Design, UI Design, Content, Development',
                link: 'https://metricly.netlify.com/'
            },
        ]
        return (
            <div className={style.row}>
                {
                    data.map(el => {
                        return (
                            <div key={el.id} className={style.item}>
                                <a href={el.link} target='_blank'>
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
