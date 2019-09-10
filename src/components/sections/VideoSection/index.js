import React, {Component} from 'react';
import { TimelineLite, Power4 } from 'gsap';
import s from './style.scss';



class VideoSection extends Component{
    state={
        vHidden: 0,
        vShow: 72, 
    }
    get tl () {
        const {vHidden, vShow} = this.state;
        const tl = new TimelineLite();

        tl
            .fromTo(this.video, 3.4,
                                {webkitClipPath: `circle(${vHidden}% at 50% 50%)`, autoAlpha: 0, scale: 1.1, ease: Power4.easeInOut}, 
                                {webkitClipPath: `circle(${vShow}% at 50% 50%)`,autoAlpha: 1, scale: 1, ease: Power4.easeInOut}, 
                                )

        return tl;
    }


   render(){
    return (
        <section className={s.section}>
            <div ref={el => this.video = el} className={s.videoWrapper}>
                <video src="" poster="/assets/images/mainVideo.jpg">

                </video>
            </div>
        </section>
    )
   }
};
export default VideoSection;