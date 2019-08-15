import React, {Fragment} from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';

const InnovationSection = ({btn, link}) => {

    const list = [
        {
            id: '0',
            image: 'assets/svg/01_discover.svg',
            text: 'Ideate',
            number: '01.',
        },
        {
            id: '1',
            image: 'assets/svg/02_validate.svg',
            text: 'Validate',
            number: '02.',
        },
        {
            id: '2',
            image: 'assets/svg/03_build.svg',
            text: 'Build',
            number: '03.',
        },
        {
            id: '3',
            image: 'assets/svg/04_launch.svg',
            text: 'Launch',
            number: '04.',
        },
    ]
    return (
        <Fragment>
            <div className={style.container}>
                    <div className={style.titleWrapper}>
                        <TitleSecondary text='User-centered innovation based on human insights'/>
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
                                            <div className={style.text}> <span className={style.number}>{el.number}</span>{el.text}</div>
                                           
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {btn ? <span className={style.link}><a href={link}>{btn}</a></span> : null}
            </div>
        </Fragment>
    )
};
export default InnovationSection;