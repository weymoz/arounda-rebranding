import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import blogs from '@/data/BlogItems'
import style from './style.scss';
import StartSection from '@sections/StartSection';
import SearchTags from '@sections/SearchTags';
import ListWorks from '@sections/ListWorks';
import Hungry from '@sections/Hungry';
import slugify from 'slugify';
import contentfulClient from '../../../functions/contentful-client'
import MoreInteresting from '@sections/MoreInteresting';
import PopupSearch from '@sections/PopupSearch';
import { composeDate } from '../../../functions/lib'




const Blog = props => {

  const [search, setSearch] = useState(false);
  const [posts, setPosts] = useState()

  useEffect(() => {
    contentfulClient.getEntries().then(res => {

      const posts = res.items.map(item => ({
        ...item.fields, 
        image: `https:${item.fields.image.fields.file.url}`,
        date: composeDate(item.fields.date)
      }));

      setPosts(posts)
    });

  }, []);


  return (
    <section className={style.Blog}>
      {}
      <PopupSearch search={search} setSearch={setSearch} />
      {}
      <SearchTags setSearch={setSearch} />
      <ListWorks list={blogs} posts={posts} />
      <Hungry />
      <MoreInteresting />
      <div className={style.wrapStartSection}>
        <StartSection />
      </div>
    </section>
  );
};
export default Blog;
