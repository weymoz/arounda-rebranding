import React, { Component } from 'react'
import CursorSvg from '../../assets/svg/cursor.svg'
import {TweenMax, TimelineMax} from "gsap"



export default class Cursor extends Component {
    cursor = null;
    tween = TweenMax;

    componentWillReceiveProps() {

        const {top, left} = this.props;

        
        this.tween.to(this.cursor, .3, {autoAlpha: 1, left: `${left}`, top: `${top}`})
    }


    componentDidMount() {
        this.tween.set(this.cursor, {autoAlpha: 0})
    }


    render() {
        const {slowCursor, stopCursor} = this.props;

        return (
            <div
                className={`cursor ${slowCursor ? 'slow' : ''} ${stopCursor ? 'stop' : ''}`}
                ref={cursor =>  this.cursor = cursor}
            >
                <CursorSvg/>
            </div>
        )
    }
}
