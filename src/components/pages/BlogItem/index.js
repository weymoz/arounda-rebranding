import React from 'react';
import { Link } from 'react-router-dom';
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
              <span className={style.case}>{blog.caseStudy.title}</span>
              <p className={style.caseText1}>{blog.caseStudy.text1}</p>
              <ul>
                {blog.caseStudy.list.map(item => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
              <p className={style.caseText2}>{blog.caseStudy.text2}</p>
              <h2 className={style.whatTitle}>{blog.what.title}</h2>
              <p className={style.whatText}>{blog.what.text}</p>
              <p className={style.whatText2}>{blog.what.text2}</p>
              <ul className={style.touchingList}>
                {blog.what.list.map(item => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
              <p className={style.whatText3}>{blog.what.text3}</p>
              <p className={style.whatText4}>{blog.what.text4}</p>
              <p className={style.whatText5}>{blog.what.text5}</p>
              <img className={style.whatImg} src={blog.what.img} alt={blog.what.imgDescription} />
              <span className={style.whatImgDescription}>{blog.what.imgDescription}</span>
              <p className={style.whatText6}>{blog.what.text6}</p>
              <p className={style.whatText7}>{blog.what.text7}</p>
              <p className={style.whatText8}>{blog.what.text8}</p>
              <p className={style.whatText9}>{blog.what.text9}</p>
              <h2 className={style.whatPreverb}>{blog.what.proverb}</h2>
              <span className={style.whatPreverbDescription}>{blog.what.proverbDescription}</span>
              <h2 className={style.conclusionTitle}>{blog.conclusion.title}</h2>
              <p className={style.conclusionText}>{blog.conclusion.text}</p>
              <p>{blog.conclusion.text2}</p>
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
