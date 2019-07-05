import React from 'react';
import style from './style.scss';

const InnovationSection = (props) => {

    const list = [
        {
            id: '0',
            image: 'https://placehold.it/200x200',
            text: 'Ideate',
            number: '01.',
        },
        {
            id: '1',
            image: 'https://placehold.it/200x200',
            text: 'Validate',
            number: '02.',
        },
        {
            id: '2',
            image: 'https://placehold.it/200x200',
            text: 'Build',
            number: '03.',
        },
        {
            id: '3',
            image: 'https://placehold.it/200x200',
            text: 'Launch',
            number: '04.',
        },
    ]
    return (
        <section className={style.innovationSection}>
            <div className="container">
                <div className="grid">
                    <div className={style.title}>
                        User-centered innovation based on human insights
                    </div>
                    <div className={style.list}>
                        <ul>
                            {
                                list.map(el => {
                                    return(
                                        <li key={el.id}>
                                            <div className={style.image}>
                                                <img src={el.image} alt=""/>
                                            </div>
                                            <div className={style.text}>{el.text}</div>
                                            <div className={style.number}>{el.number}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default InnovationSection;