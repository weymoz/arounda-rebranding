import React from "react";
import style from "./style.scss";

const Hungry = props => {
  return (
    <div
      className={
        props.blue ? `${style.Hungry} ${style.HungryBlue}` : style.Hungry
      }
    >
      <div className={style.wrap}>
        <div className={style.ctaContainer}>
          <h2 className={style.title}>Hungry for more?</h2>
          <p className={style.description}>
            Sign up to our newsletter to get weekly updates on the newest design
            stories, case studies and tips
          </p>
        </div>
        <form className={style.form}>
          <label className={style.email}>
            <p>Email address</p>
            <input type="email" placeholder="What's Your email ?"/>
          </label>
          <button type="submit" className={style.submit}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default Hungry;
