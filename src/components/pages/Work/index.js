import React, { Component, Fragment } from 'react';
import style from './style.scss';
import SortSection from '@sections/SortSection';
import InnovationSection from '@sections/InnovationSection';
import StartSection from '@sections/StartSection';
import WorkSection from '@sections/WorkSection';
import SliderSection from '@sections/SliderSection';

export default class Work extends Component {
  render() {
    return (
      <Fragment>
        <SortSection />
        <section className={style.wrapWorkSection}>
          <WorkSection />
        </section>
        <section className={style.wrapInnovationSection}>
          <InnovationSection btn='Learn more about method' />
        </section>
        <SliderSection />
        <section className={style.wrapStartSection}>
          <StartSection />
        </section>
      </Fragment>
    );
  }
}
