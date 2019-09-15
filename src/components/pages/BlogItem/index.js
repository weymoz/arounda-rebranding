import React from 'react';
import {Link} from 'react-router-dom'
import style from './style.scss';
import blogs from '@/data/BlogItems';

import Hungry from '@sections/Hungry';
import StartSection from '@sections/StartSection';
import MoreInteresting from '@sections/MoreInteresting';

const BlogItem = props => {
  return (
    <section className={style.BlogItem}>
      {blogs.map(blog =>
        blog.id == props.match.params.id ? (
          <div key={blog.id} className={style.content}>
            <div className={style.top}>
              <img src={blog.img} alt={blog.tag} className={style.img} />
              <div className={style.wrapTitle}>
                <Link to='/blog'>Back to blog</Link>
                <h1>{blog.title}</h1>
                <p>{blog.public}</p>
              </div>
            </div>
            <div className={style.body}>
              <span>{blog.caseStudy.title}</span>
              <span>{blog.what.text}</span>
            </div>
          </div>
        ) : null
      )}
      <Hungry />
      <MoreInteresting />
      <div className={style.wrapStartSection}>
        <StartSection />
      </div>
    </section>
  );
};
export default BlogItem;
