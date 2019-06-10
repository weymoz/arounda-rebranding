import React from 'react';
import style from './style.scss';
import Title from '../Title';

const BlogSection = (props) => {

    const posts = [
        {
            id: 0,
            date: 'May 17',
            category: 'Culture',
            title: 'How do you build culture?'
        },
        {
            id: 1,
            date: 'May 17',
            category: 'UX Design',
            title: 'Six tips for user testing'
        },
        {
            id: 2,
            date: 'May 17',
            category: 'Culture',
            title: 'The three pesonas of your UX portfolio'
        },
    ]

    return (
        <section className={style.section}>
            <div className="container">
                <div className='grid'>
                    <div className={style.titleWrapper}>
                        <Title text={'Blog and news'}/>
                    </div>
                    <div className={style.posts}>
                        <ul>
                            {posts.map(el => {
                                return (
                                    <li key={el.id} className={style.post}>
                                        <div className={style.date}>
                                            <span>{el.date}</span>
                                            <span className={style.dash}>/</span>
                                            <span>{el.category}</span>
                                        </div>
                                        <div className={style.title}>
                                            {el.title}
                                        </div> 
                                    </li>
                                )
                                })
                            }
                        </ul>
                    </div>
                    <div className={style.image}>
                        <img src="./assets/images/img-4.png" alt="image"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default BlogSection;