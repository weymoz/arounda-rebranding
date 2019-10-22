import React, { Component, Fragment } from 'react';
import ServicesHeader from '@sections/ServicesHeader';
import style from './style.scss';



import CapabilitySection from '@sections/CapabilitySection';
import ServiceSlideSection from '@sections/ServiceSlideSection';
import ContentService from '@simple/ContentService';
import InnovationSection from '@sections/InnovationSection';
import AgencySection from '@sections/AgencySection';
import ServiceSlideSectionTablet from '@sections/ServiceSlideSectionTablet';
import data from '@/data/ServiceSlide';
import MediaQuery from 'react-responsive';
import Footer from '@sections/Footer';
import MetaTags from 'react-meta-tags';



export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <ServicesHeader />
        <section className={style.serviceBg}>
          <div className={style.image}>
            <picture>
              <source srcSet='assets/images/bg.webp' type="image/webp"/>
              <img src='assets/images/bg.jpg' alt='our team' />
            </picture> 
          </div>
        </section>
        <CapabilitySection />
        <MediaQuery minDeviceWidth={1080}>
          {matches => {
            if (matches) {
              return (
                <ServiceSlideSection>
                  {data.map(el => (
                    <ContentService
                      key={el.id}
                      id={el.id}
                      title={el.title}
                      description={el.description}
                      image={el.image}
                      background={el.background}
                      video={el.video}
                      list={el.list}
                    />
                  ))}
                </ServiceSlideSection>
              );
            } else {
              return <ServiceSlideSectionTablet />;
            }
          }}
        </MediaQuery>
        <section className={style.wrapInnovationSection}>
          <InnovationSection btn=' ' link='' />
        </section>
        <AgencySection title='Get in touch.' titleThink='And be excited' subtitle='We`re always open for new connections' dark={true} />
        <Footer/>
        <MetaTags>
            <title>Services. What we do at Arounda</title>
            <meta name="description" content="We create and evolve digital products thought Arounda capabilities." />
        </MetaTags>
      </Fragment>
    );
  }
}
