import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../functions/store";

import blogs from "@/data/BlogItems";
import style from "./style.scss";
import StartSection from "@sections/StartSection";
import SearchTags from "@sections/SearchTags";
import Tags from "@sections/Tags";
import ListWorks from "@sections/ListWorks";
import Hungry from "@sections/Hungry";
import slugify from "slugify";
import contentfulClient from "../../../functions/contentful-client";
import MoreInteresting from "@sections/MoreInteresting";
import PopupSearch from "@sections/PopupSearch";
import { composeDate } from "../../../functions/lib";
import SubscribeButton from "@simple/SubscribeButton";

const Blog = props => {
  //
  const [search, setSearch] = useState(false);
  const [posts, setPosts] = useState();

  useEffect(() => {
    contentfulClient
      .getAllPosts()
      .then(res => {
        const posts = res.items.map(item => ({
          ...item.fields,
          author: item.fields.author.fields.name,
          image: `https:${item.fields.image.fields.file.url}`,
          date: composeDate(item.fields.date)
        }));

        setPosts(posts);
      });

    contentfulClient
      .getTags()
      .then(data => console.log(data))
  }, []);

  return (
    <Provider store={store}>
      <section className={style.Blog}>
        <PopupSearch search={search} setSearch={setSearch} />
        {/* <SearchTags setSearch={setSearch} /> */}
        <Tags />
        <ListWorks list={blogs} posts={posts} />
        <Hungry />
        <MoreInteresting />
        <div className={style.wrapStartSection}>
          <StartSection />
        </div>
      </section>
    </Provider>
  );
};
export default Blog;
