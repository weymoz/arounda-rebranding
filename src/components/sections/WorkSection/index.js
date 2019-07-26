import React from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Works from '@simple/Works';


const WorkSection = (props) => {
    
    return (
        <section className={style.workSection}>
                <div className={style.titleWrapper}>
                    <Title text={"Recent work"}/>
                </div>
            <Works/>
        </section>
    )
};
export default WorkSection;