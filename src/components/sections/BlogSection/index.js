import React from 'react';
import style from './style.scss';
import Title from '@simple/Title';

const BlogSection = props => {
  const postsDesktop = [
    {
      id: 0,
      date: 'May 17',
      category: 'Culture',
      title1: 'How will technology shape UX Design',
      title2: 'in 2019'
    },
    {
      id: 1,
      date: 'May 17',
      category: 'UX Design',
      title1: 'Six tips for user testing'
    },
    {
      id: 2,
      date: 'May 17',
      category: 'Culture',
      title1: '6 things we learned about animation',
      title2: 'from Headspacev'
    }
  ];
  const postsTablet = [
    {
      id: 0,
      date: 'May 17',
      category: 'Culture',
      title1: 'How will technology shape UX',
      title2: 'Design in 2019'
    },
    {
      id: 1,
      date: 'May 17',
      category: 'UX Design',
      title1: 'Six tips for user testing'
    },
    {
      id: 2,
      date: 'May 17',
      category: 'Culture',
      title1: '6 things we learned about',
      title2: 'animation from Headspacev'
    }
  ];


  return (
    <section className={style.section}>
      <div className={style.titleWrapper}>
        <Title text={'Blog and news'} />
      </div>
      <div className={style.posts}>
        <ul className={style.listForDesktop}>
          {postsDesktop.map(el => {
            return (
              <li key={el.id} className={style.post}>
                <div className={style.date}>
                  <span>{el.date}</span>
                  <span className={style.dash}>/</span>
                  <span>{el.category}</span>
                </div>
                <div className={style.title}>
                  <span>{el.title1}</span>
                  {el.title2 ? <br /> : null}
                  <span>{el.title2}</span>
                </div>
                <div className={style.image}>
                  <img src='./assets/images/img-4.png' alt='image' />
                </div>
              </li>
            );
          })}
        </ul>
        <ul className={style.listForTablet}>
          {postsTablet.map(el => {
            return (
              <li key={el.id} className={style.post}>
                <div className={style.date}>
                  <span>{el.date}</span>
                  <span className={style.dash}>/</span>
                  <span>{el.category}</span>
                </div>
                <div className={style.title}>
                  <span>{el.title1}</span> <span>{el.title2}</span>
                </div>
                <div className={style.image}>
                  <img src='./assets/images/img-4.png' alt='image' />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default BlogSection;
