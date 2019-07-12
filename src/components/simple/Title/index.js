import React from 'react';
import style from './style.scss';


const Title = ({text}) => {

    function f (e) {
        console.log(e.target)
    }

    return (
        <h2 onClick={f} className={style.title}>{text}</h2>
    )
};
export default Title;