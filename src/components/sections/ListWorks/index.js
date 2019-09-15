import React, { useState } from 'react';
import style from './style.scss';
import One from '@/assets/images/1.jpg';
import Two from '@/assets/images/2.jpg';
import Three from '@/assets/images/3.jpg';
import Four from '@/assets/images/4.jpg';
import Five from '@/assets/images/5.jpg';
import Six from '@/assets/images/6.jpg';

const ListWorks = props => {
  const [list, setList] = useState([
    {
      id: 1,
      img: One,
      tag: 'Branding',
      title: 'How will technology shape UX Design in 2019',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 2,
      img: Two,
      tag: 'Branding',
      title: '6 things we learned about animation from Headspace',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 3,
      img: Three,
      tag: 'Branding',
      title: '4 steps for choosing the right projects for your UX portfolio',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 4,
      img: Four,
      tag: 'Branding',
      title: '6 things we learned about animation from Headspace',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 5,
      img: Five,
      tag: 'Branding',
      title: 'Explore the uknown places through AR',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 6,
      img: Six,
      tag: 'Branding',
      title: 'Why founders should prototype more',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 7,
      img: One,
      tag: 'Branding',
      title: '6 things we learned about animation from Headspace',
      public: '19 July by Vladislav Gavriluk'
    },
    {
      id: 8,
      img: Two,
      tag: 'Branding',
      title: '6 things we learned about animation from Headspace',
      public: '19 July by Vladislav Gavriluk'
    },
  ]);
  return (
    <div className={style.ListWorks}>
      {list.map(post => (
        <a href="#" key={post.id} className={style.item}>
          <img src={post.img} alt={post.tag} className={style.img} />
          <p className={style.tag}>{post.tag}</p>
          <h2 className={style.title}>{post.title}</h2>
          <p className={style.public}>{post.public}</p>
        </a>
      ))}
    </div>
  );
};
export default ListWorks;
