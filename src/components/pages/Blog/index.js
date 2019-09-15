import React from 'react';
import style from './style.scss';
import StartSection from '@sections/StartSection';
import SearchTags from '@sections/SearchTags';
import ListWorks from '@sections/ListWorks';
import Hungry from '@sections/Hungry'

const Blog = props => {
  return (
    <section className={style.Blog}>
      <SearchTags />
      <ListWorks />
      <Hungry />
      <div className={style.wrapStartSection}>
        <StartSection />
      </div>
    </section>
  );
};
export default Blog;
