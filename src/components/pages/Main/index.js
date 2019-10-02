import React, { Component, Fragment } from 'react';
import { TimelineLite } from 'gsap';
import style from './style.scss';
import WorkSection from '@sections/WorkSection';
import HeadingSection from '@sections/HeadingSection';
import WhoSection from '@sections/WhoSection';
import WhySection from '@sections/WhySection';
import WhatSection from '@sections/WhatSection';
import HowSection from '@sections/HowSection';
import BlogSection from '@sections/BlogSection';
import StartSection from '@sections/StartSection';
import PartnerSection from '@sections/PartnerSection';
import VideoSection from '@sections/VideoSection';
import BackgroundAnimate from '@simple/BackgroundAnimate';
import data from '@/data/Works';
import Footer from '@sections/Footer';



class Main extends Component {
  get tl() {
    const tl = new TimelineLite();
    const headingTl = new TimelineLite();
    const bgTl = new TimelineLite();
    const videoTl = new TimelineLite();

    headingTl.add(this.heading.tl);
    bgTl.add(this.bg.tween);
    videoTl.add(this.video.tl)

    tl.add(bgTl, 'start').add(headingTl, '-=.8').add(videoTl, '-=3');

    return tl;
  }
  render() {
    return (
      <Fragment>
        <HeadingSection ref={el => (this.heading = el)} />
        <BackgroundAnimate ref={el => (this.bg = el)} />
        <VideoSection ref={el => this.video = el}/>
        <PartnerSection />
        <section className={style.wrapWorkSection}>
          <WorkSection worksData={data}/>
        </section>
        <WhoSection />
        <WhySection />
        <WhatSection />
        <HowSection />
        <BlogSection />
        <section className={style.wrapStartSection}>
        <StartSection />
        </section>
        <Footer/>        
      </Fragment>
    );
  }
}
export default Main;
