import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import style from "./style.scss";

const ListWorks = ({ posts }) => {
  console.log(posts);
  return (
    <div className={style.ListWorks}>
      {posts.itemIds &&
        posts.itemIds.map(id => {
          const post = posts.allItems[id];
          return (
            <div key={id}>
              <Link
                to={`/blog/${post.slug}`}
                className={style.item}
              >
                <div
                  style={{
                    height: 300,
                    width: "100%",
                    backgroundImage: `url(${post.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                ></div>

                <p className={style.tag}>{post.tag}</p>
                <h2 className={style.title}>{post.title}</h2>
                <p
                  className={style.public}
                >{`${post.date} by ${post.author}`}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
export default ListWorks;
