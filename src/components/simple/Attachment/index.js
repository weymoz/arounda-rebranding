import React from 'react';
import style from './style.css';

const Attachment = (props) => {
    return (
        <div className={style.inputFileWrapper}>
            <input id='file' className={style.inputFile} type='file' />
            <label className={style.labelFile} htmlFor='file'>
                <svg height='23' viewBox='0 0 10 23' width='10' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='m-5.09090909 3.99v12.18s-.17754546 2.5562727 2.4255 2.5562727c2.34722727 0 2.34722727-2.5562727 2.34722727-2.5562727v-12.81s0-3.36-3.34090909-3.36-3.34090909 3.36-3.34090909 3.36v12.81s0 4.83 4.29545455 4.83c4.29545454 0 4.29545454-4.83 4.29545454-4.83v-12.81c0-.525-.95454545-.525-.95454545 0v12.81s.34745454 3.8754545-3.34090909 3.8754545c-3.3409091 0-3.3409091-3.8754545-3.3409091-3.8754545v-12.81s0-2.40545454 2.38636364-2.40545454 2.38636364 2.40545454 2.38636364 2.40545454v12.81s0 1.5062992-1.39268182 1.5062992c-1.3926553 0-1.47095455-1.5062992-1.47095455-1.5062992v-12.18c0-.525-.95454545-.525-.95454545 0z'
                        fill='#9d9d9d'
                        stroke='#fff'
                        strokeWidth='.2'
                        transform='translate(8 1)'
                    />
                </svg>
                <span>Add attachment</span>
            </label>
        </div>
    )
};
export default Attachment;