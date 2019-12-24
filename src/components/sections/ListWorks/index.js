import React, { useState } from "react";
import { Link } from "react-router-dom";
import slugify from 'slugify'
import style from "./style.scss";

const ListWorks = ({ list, posts }) => {
  return (
    <div className={style.ListWorks}>
      {posts &&
        posts.map((post, i) => (
          <div key={i}>
            <Link 
              to={`/blog/${post.slug}`}
              key={post.id} 
              className={style.item}
            >

              <img src={post.image} className={style.img} />

              <p className={style.tag}>{post.category}</p>
              <h2 className={style.title}>{post.title}</h2>
              <p className={style.public}>{`By ${post.author}, ${post.date}`}</p>
            </Link>
          </div>
      ))} 

      {/* {list.map(post => (
        <Link to={`/blog/${post.id}`} key={post.id} className={style.item}>
          <img src={post.img} alt={post.tag} className={style.img} />
          <p className={style.tag}>{post.tag}</p>
          <h2 className={style.title}>{post.title}</h2>
          <p className={style.public}>{post.public}</p>
        </Link>
      ))}  */}
    </div>
  );
};
export default ListWorks;
