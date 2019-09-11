import React from 'react';
import s from './style.scss';

const ContentServiceTablet = ({title, desc, id, list, image}) => {
    return (
        <div className={s.contentWrapper} id={id}>
                <div className={s.image}>
                    <img src={image} alt={title}/>
                </div>
                <div className={s.content}>
                    <h4 className={s.title}>{title}</h4>
                    <p className={s.desc}>{desc}</p>
                    <div className={s.list}>
                        <ul>
                            {
                                list.map((el,i) => {
                                    return <li tabIndex='-1' key={i}><span>{el}</span></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
        </div>
    )
};
export default ContentServiceTablet;