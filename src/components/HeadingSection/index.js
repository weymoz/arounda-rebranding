import React, { Component } from 'react'
import Heading from '../Heading'
import style from './style.scss'
import Subtitle from '../Subtitle';

export default class HeadingSection extends Component {

    render() {
        return (
            <div className={style.headingSection}>
                <div className="container">
                    <Heading />
                    <h3 className={style.subtitle}>Strategy, Design & Technology</h3>
                </div>
            </div>
        )
    }
}
