import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';

const ListWorks = ({ list }) => {
  return (
    <div className={style.ListWorks}>
      {list.map(post => (
        <Link to={`/blog/${post.id}`} key={post.id} className={style.item}>
          <img src={post.img} alt={post.tag} className={style.img} />
          <p className={style.tag}>{post.tag}</p>
          <h2 className={style.title}>{post.title}</h2>
          <p className={style.public}>{post.public}</p>
        </Link>
      ))}
    </div>
  );
};
export default ListWorks;
