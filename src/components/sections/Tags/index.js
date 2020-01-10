import React, { useEffect } from "react";
import s from "./style.scss";
import { connect } from "react-redux";
import { fetchTags } from "../../../functions/actions";
import TagLink from "@sections/TagLink";

const mapStateToProps = ({ tags }) => ({ tags });

let Tags = ({ fetchTags, tags }) => {
  const { allTags, tagIds } = tags;

  useEffect(fetchTags, []);

  return (
    <ul className={s.tags}>
      {tagIds &&
        tagIds.map(id => (
          <li key={id}>
            <TagLink tagName={allTags[id].value} />
          </li>
        ))}
    </ul>
  );
};

Tags = connect(mapStateToProps, { fetchTags })(Tags);
export default Tags;
