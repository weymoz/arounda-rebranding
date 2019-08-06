import React, { Component, Fragment } from 'react';
import SortSection from '@sections/SortSection';
import InnovationSection from '@sections/InnovationSection';
import StartSection from '@sections/StartSection';
import WorkSection from '@sections/WorkSection';
import SliderSection from '@sections/SliderSection';


export default class Work extends Component {
    render() {
        return (
            <Fragment>
                <SortSection/>
                <WorkSection/>
                <InnovationSection/>
                <SliderSection/>
                <StartSection/>
            </Fragment>
        )
    }
}
