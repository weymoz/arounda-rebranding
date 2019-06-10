import React from 'react';
import style from './style.scss';
import Title from '../Title';


const WorkSection = (props) => {
    const data = [
        {
            id: 0,
            image: './assets/images/bold.png',
            title: 'Feel bold',
            desc: 'Strategy, UX Design, UI Design'
        },
        {
            id: 1,
            image: './assets/images/gigzi.png',
            title: 'Gigzi',
            desc: 'Strategy, UX Design, UI Design, Development'
        },
        {
            id: 2,
            image: './assets/images/Lustery.png',
            title: 'Lustery',
            desc: 'UX Design, UI Design'
        },
        {
            id: 3,
            image: './assets/images/bold.png',
            title: 'Velonto',
            desc: 'Strategy, UX Design, UI Design'
        },
        {
            id: 4,
            image: './assets/images/metricly.png',
            title: 'Metricly',
            desc: 'UX Design, UI Design'
        },
        {
            id: 5,
            image: './assets/images/Lustery.png',
            title: 'Feel bold',
            desc: 'UX Design, UI Design'
        },
    ]
    return (
        <section className={style.workSection}>
            <div className="container">
                <div className={style.titleWrapper}>
                    <Title text={"Recent work"}/>
                </div>
                <div className={style.grid}>
                    {
                        data.map(el => {
                            return (
                                <div key={el.id} className={style.item}>
                                    <div className={style.image}> <img src={el.image} alt=""/></div>
                                    <div className={style.wrapper}>
                                        <h3 className={style.title}>{el.title}</h3>
                                        <div className={style.desc}>{el.desc}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
};
export default WorkSection;