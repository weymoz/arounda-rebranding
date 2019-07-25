import React from 'react';
import style from './style.scss';

const Description = ({text}) => {
    return (
        <p className={style.desc}>{text}</p>
    )
};
export default Description;