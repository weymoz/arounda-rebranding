import React from 'react';
import style from './style.scss';

const StartSection = (props) => {
    return (
        <section className={style.section}>
                    <div className={style.title}>
                        Got a project?<br/>
                        <div>Let's start.</div>
                    </div>
        </section>
    )
};
export default StartSection;