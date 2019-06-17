import React from 'react';
import style from './style.scss';


const Title = ({text}) => {
    return (
        <h2 className={style.title}>{text}</h2>
    )
};
export default Title;