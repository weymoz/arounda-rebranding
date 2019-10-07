import React from 'react';
import style from './style.scss';
import TitleSecondary from '@simple/TitleSecondary';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogSection = props => {
  const postsDesktop = [
    {
      id: 0,
      date: 'July 1',
      category: 'UI Design',
      title1: '7 free icon sets you',
      title2: 'can get on Dribbble',
      link: 'https://dribbble.com/stories/2019/07/01/7-free-icon-sets-to-download-on-dribbble',
      image: 'https://cdn.dribbble.com/users/509287/screenshots/4247409/airport-set_of_icons.png'
    },
    {
      id: 1,
      date: 'Feb 15',
      category: 'UI Design',
      title1: 'What defines good ',
      title2: 'UI Design?',
      link: 'https://dribbble.com/stories/2019/02/15/what-defines-good-ui-design',
      image: 'https://cdn.dribbble.com/uploads/809/original/c7e054ce5aeb64f774b3160185b783fb.png?1550088246'
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.titleWrapper}>
        <TitleSecondary text={'Blog and news'} />
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
                <a href={el.link} target="_blank" className={`${style.title} stopCursor`}>
                  <span>{el.title1}</span>
                  {el.title2 ? <br /> : null}
                  <span>{el.title2}</span>
                </a>
                <div className={style.image}>
                  <LazyLoadImage 
                      src={el.image}
                      alt={el.title1}
                      threshold={100}
                  />
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
