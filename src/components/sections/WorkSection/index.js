import React, {Fragment} from 'react';
import style from './style.scss';
import Title from '@simple/Title';
import Works from '@simple/Works';


const WorkSection = (props) => {
    
    return (
        <Fragment>
                <div className={style.titleWrapper}>
                    <Title text={"Recent work"}/>
                </div>
            <Works/>
        </Fragment>
    )
};
export default WorkSection;