import React, { useState, Fragment } from 'react';
import { Route } from 'react-router-dom';
import blogs from '@/data/BlogItems'
import style from './style.scss';
import StartSection from '@sections/StartSection';
import SearchTags from '@sections/SearchTags';
import ListWorks from '@sections/ListWorks';
import Hungry from '@sections/Hungry';
import MoreInteresting from '@sections/MoreInteresting';
import PopupSearch from '@sections/PopupSearch';

import { client } from 'contentful'

const Blog = props => {
  const [search, setSearch] = useState(false);






  return (
    <section className={style.Blog}>
      {}
      <PopupSearch search={search} setSearch={setSearch} />
      {}
      <SearchTags setSearch={setSearch} />
      <ListWorks list={blogs} />
      <Hungry />
      <MoreInteresting />
      <div className={style.wrapStartSection}>
        <StartSection />
      </div>
    </section>
  );
};
export default Blog;
