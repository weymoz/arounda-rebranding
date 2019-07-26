import React from 'react';
import s from './style.scss';

const VideoSection = (props) => {
    return (
        <section className={s.section}>
            <div className={s.videoWrapper}>
                <video src="" poster="/assets/images/mainVideo.jpg">

                </video>
            </div>
        </section>
    )
};
export default VideoSection;