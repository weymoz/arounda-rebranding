import React, { Fragment } from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';

const StartSection = props => {
  return (
    <Fragment>
      <div className={style.title}>
        Got a project?
        <br />
        <Link to={'/contact/'} className='stopCursor'>Let's start.</Link>
      </div>
    </Fragment>
  );
};
export default StartSection;
