import React from 'react';
import s from './style.scss';
import data from '@/data/ServiceSlide';
import ContentServiceTablet from '@simple/ContentServiceTablet';

const ServiceSlideSectionTablet = (props) => {
    return (
        <section className={s.section}>
            {
                data.map((el, i) => {
                    return (
                        <ContentServiceTablet
                            key={el.id}
                            id={el.id} 
                            title={el.title}
                            desc={el.description}
                            list={el.list}
                            image={el.image}
                        />  
                    )
                    
                })
            }
        </section> 
    )
};
export default ServiceSlideSectionTablet;