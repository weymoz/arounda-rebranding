import React from 'react';
import PreloaderSvg from '@assets/svg/preloader.svg';
import style from './style.scss';

const Preloader = (props) => {
    return (
        <div className={style.preloaderWrapper}>
            <div className={style.preloader}>
                <PreloaderSvg/>
            </div>
        </div>
    )
};
export default Preloader;