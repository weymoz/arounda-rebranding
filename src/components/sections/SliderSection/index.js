import React, { Component } from 'react';
import SliderSingle from '@simple/Slider';
import Title from '@simple/Title';
import style from './style.scss';

export default class SliderSection extends Component {
    render() {
        return (
            <section className={style.sliderSection}>
                <div className={style.container}>
                    <div className={style.titleWrapper}>
                        <Title text={'Reviews'}/>
                    </div>
                    <SliderSingle/>
                </div>
            </section>
        )
    }
}
