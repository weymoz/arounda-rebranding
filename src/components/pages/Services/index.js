import React, { Component, Fragment } from 'react';
import ServicesHeader from '@sections/ServicesHeader';
import style from './style.scss';
import CapabilitySection from '@sections/CapabilitySection';
import ServiceSlideSection from '@sections/ServiceSlideSection';
import ContentService from '@simple/ContentService'
import InnovationSection from '@sections/InnovationSection';
import AgencySection from '@sections/AgencySection';
import  ServiceSlideSectionTablet from '@sections/ServiceSlideSectionTablet'
import data from '@/data/ServiceSlide';
import MediaQuery from 'react-responsive';

export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <ServicesHeader/>
                <section className={style.serviceBg}>
                    <div className={style.image}>
                        <img src="assets/images/bg.jpg" alt="background"/>
                    </div>
                </section>
                <CapabilitySection/>
                <MediaQuery minDeviceWidth={1080}>
                    {(matches) => {
                        if(matches) {
                            return (
                                <ServiceSlideSection>
                                    {
                                        data.map((el) => (
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
                                        ))
                                    }
                                </ServiceSlideSection>
                            )
                        }else {
                            return (
                                <ServiceSlideSectionTablet />
                            )
                        }

                    }}
                </MediaQuery>
                <InnovationSection 
                    btn='Learn more about method'
                    link=''
                />
                <AgencySection
                    title='Get in touch.'
                    titleThink='And be excited'
                    subtitle='Get in touch. And be excited'
                    dark={true}
                />
            </Fragment>
        )
    }
}
