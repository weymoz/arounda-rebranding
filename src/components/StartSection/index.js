import React from 'react';
import style from './style.scss';

const StartSection = (props) => {
    return (
        <section className={style.section}>
            <div className="container">
                <div className='grid'>
                    <div className={style.title}>
                        Got a project?
                        <div>let's start.</div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default StartSection;