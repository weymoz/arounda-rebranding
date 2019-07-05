import React, { Component, Fragment } from 'react';
import SortSection from '@sections/SortSection';
import InnovationSection from '@sections/InnovationSection';
import StartSection from '@sections/StartSection';
import Works from '@simple/Works';
import Title from '@simple/Title';
import SliderSingle from '@simple/Slider';
import style from './style.scss';


export default class Work extends Component {
    render() {
        return (
            <Fragment>
                <SortSection/>
                <Works/>
                <InnovationSection/>
                <section className={style.sliderSection}>
                    <div className="container">
                        <div className={style.titleWrapper}>
                            <Title text={'Reviews'}/>
                        </div>
                        <SliderSingle/>
                    </div>
                </section>
                <StartSection/>
            </Fragment>
        )
    }
}
