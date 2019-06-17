import React, { Component } from 'react'
import CursorSvg from '@assets/svg/cursor.svg'
import { Tween } from 'react-gsap';
import style from './style.scss';



export default class Cursor extends Component {
    state = {
        top: 0,
        left: 0,
        slowCursor: false,

    }

    componentDidMount() {   
        this.cursorMove();
    }

    cursorMove = (e) => {

		// const cursor = findDOMNode(this.cursor);
		// let x = e.nativeEvent.clientX;
		// let y = e.nativeEvent.clientY;

        window.addEventListener('mousemove', (e) => {
            let x = e.clientX;
            let y = e.clientY;

            this.setState({
                top: y,
                left: x,
            })


            e.target.classList.contains('slowCursor') ? this.setState({slowCursor: true}) : this.setState({slowCursor: false})
		    e.target.classList.contains('stopCursor') ? this.setState({stopCursor: true}) : this.setState({stopCursor: false})
        });

		// this.setState({
		// 	top: y,
		// 	left: x
		// })
		


	
		// this.tween.to(cursor, .3, {autoAlpha: 1, top: `${y}`, left: `${x}`})
		

		


	}
    render() {
        const {top, left, slowCursor, stopCursor} = this.state;
        return (
            <Tween
                to={{top: top,left: left}}
                duration={.6}   
            >
                <div
                    className={`${style.cursor} ${slowCursor ? style.slow : ''} ${stopCursor ? style.stop : ''}`}
                >
                    <CursorSvg/>
                </div>
            </Tween>
        )
    }
}
