import React from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Works from '@simple/Works';


const WorkSection = (props) => {
    
    return (
        <section className={style.workSection}>
            <div className="container">
                <div className={style.titleWrapper}>
                    <Title text={"Recent work"}/>
                </div>
            </div>
            <Works/>
        </section>
    )
};
export default WorkSection;