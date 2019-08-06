import React from 'react';
import Observer from "react-intersection-observer";
import s from './style.scss';
import Title from '@simple/Title';

const ContentService = ({id, description, onChange, title, list}) => {

    const changeItem = inView => {
    
        if (inView) {
            onChange();
        }
    };


    return (
        <div className={s.content} id={id}>
            <Observer tag='div' onChange={changeItem}>
                <Title text={title}/>
                <p className={s.text}>
                    {description}
                </p>
                <ul className={s.list}>
                    {list.map((el, i) => <li key={i}><span>{el}</span></li>)}
                </ul>
            </Observer>
        </div>
    )
};
export default ContentService;