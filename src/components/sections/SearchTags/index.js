import React, { useState } from 'react';
import style from './style.scss';
import Search from '@/assets/svg/search.svg'

const SearchTags = props => {
  const [tags, setTags] = useState([
    {
      id: 1,
      name: 'All topics'
    },
    {
      id: 2,
      name: 'Animation'
    },
    {
      id: 3,
      name: 'Branding'
    },
    {
      id: 4,
      name: 'Case study'
    },
    {
      id: 5,
      name: 'Development'
    },
    {
      id: 6,
      name: 'Illustration'
    },
    {
      id: 7,
      name: 'Tools'
    }
  ]);
  return (
    <div className={style.SearchTags}>
      <div className={style.content}>
        <ul className={style.list}>
          {tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
        <div className={style.searchIcon}>
            <Search />
        </div>
      </div>
    </div>
  );
};
export default SearchTags;