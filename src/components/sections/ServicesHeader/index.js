import React, { Component, Fragment } from 'react';
import Title from '@simple/Title';
import Subtitle from '@simple/Subtitle';
import style from './style.scss';

export default class ServicesHeader extends Component {
    render() {
        return (
            <Fragment>
                <section className={style.headingSection}>
                            <div className={style.titleWrapper}>
                                <Title text='Co-create digital products from scratch'/>
                            </div>
                            <div className={style.subtitleWrapper}>
                                <Subtitle text='from idea to market-ready product'/>
                            </div>
                </section>
                <section className={style.serviceSection}>
                            <div className={style.item}>
                                <div className={style.icon}>
                                    <svg height="58" viewBox="0 0 58 58" width="58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-4 -8)"><path d="m.5.5h69v71h-69z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g fill="#393939"><path d="m11.9999985 49.9999985c-4.4182785.0000015-7.99999866-3.5816985-7.99999999-8v-26c-.00000019-4.4182685 3.58172149-7.99999866 7.99999999-7.99999999h26c4.4183015-.00000019 8.0000015 3.58172149 8 7.99999999v10h-2v-10c.0000015-3.3137085-2.6862985-5.9999985-6-5.99999999h-26c-3.3137085.00000149-5.9999985 2.68629149-5.99999999 5.99999999v26c.00000149 3.3137015 2.68629149 6.0000015 5.99999999 6h10v2z" fillRule="nonzero"/><path d="m29 58c-3.866 0-7-3.134-7-7v-18c0-3.866 3.134-7 7-7h18c3.866 0 7 3.134 7 7v11h-2v-11c0-2.7614-2.2386-5-5-5h-18c-2.7614 0-5 2.2386-5 5v18c0 2.7614 2.2386 5 5 5h11v2z" fillRule="nonzero"/><path d="m46 66c-3.3137 0-6-2.6863-6-6v-10c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6zm-4-6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-10c0-2.2091-1.7909-4-4-4h-10c-2.2091 0-4 1.7909-4 4z"/><circle cx="51" cy="55" fillRule="nonzero" r="2"/></g></g></svg>
                                </div>
                                <div className={style.title}>Platforms</div>
                                <div className={style.desc}>We shapes your business idea into a product</div>
                            </div>
                            <div className={style.item}>
                            <div className={style.icon}>
                                    <svg height="58" viewBox="0 0 58 58" width="58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-4 -8)"><path d="m.5.5h69v71h-69z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g fill="#393939"><path d="m11.9999985 49.9999985c-4.4182785.0000015-7.99999866-3.5816985-7.99999999-8v-26c-.00000019-4.4182685 3.58172149-7.99999866 7.99999999-7.99999999h26c4.4183015-.00000019 8.0000015 3.58172149 8 7.99999999v10h-2v-10c.0000015-3.3137085-2.6862985-5.9999985-6-5.99999999h-26c-3.3137085.00000149-5.9999985 2.68629149-5.99999999 5.99999999v26c.00000149 3.3137015 2.68629149 6.0000015 5.99999999 6h10v2z" fillRule="nonzero"/><path d="m29 58c-3.866 0-7-3.134-7-7v-18c0-3.866 3.134-7 7-7h18c3.866 0 7 3.134 7 7v11h-2v-11c0-2.7614-2.2386-5-5-5h-18c-2.7614 0-5 2.2386-5 5v18c0 2.7614 2.2386 5 5 5h11v2z" fillRule="nonzero"/><path d="m46 66c-3.3137 0-6-2.6863-6-6v-10c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6zm-4-6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-10c0-2.2091-1.7909-4-4-4h-10c-2.2091 0-4 1.7909-4 4z"/><circle cx="51" cy="55" fillRule="nonzero" r="2"/></g></g></svg>
                                </div>
                                <div className={style.title}>Mobile applicarion</div>
                                <div className={style.desc}>We shapes your business idea into a product</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.icon}>
                                    <svg height="58" viewBox="0 0 58 58" width="58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-4 -8)"><path d="m.5.5h69v71h-69z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g fill="#393939"><path d="m11.9999985 49.9999985c-4.4182785.0000015-7.99999866-3.5816985-7.99999999-8v-26c-.00000019-4.4182685 3.58172149-7.99999866 7.99999999-7.99999999h26c4.4183015-.00000019 8.0000015 3.58172149 8 7.99999999v10h-2v-10c.0000015-3.3137085-2.6862985-5.9999985-6-5.99999999h-26c-3.3137085.00000149-5.9999985 2.68629149-5.99999999 5.99999999v26c.00000149 3.3137015 2.68629149 6.0000015 5.99999999 6h10v2z" fillRule="nonzero"/><path d="m29 58c-3.866 0-7-3.134-7-7v-18c0-3.866 3.134-7 7-7h18c3.866 0 7 3.134 7 7v11h-2v-11c0-2.7614-2.2386-5-5-5h-18c-2.7614 0-5 2.2386-5 5v18c0 2.7614 2.2386 5 5 5h11v2z" fillRule="nonzero"/><path d="m46 66c-3.3137 0-6-2.6863-6-6v-10c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6zm-4-6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-10c0-2.2091-1.7909-4-4-4h-10c-2.2091 0-4 1.7909-4 4z"/><circle cx="51" cy="55" fillRule="nonzero" r="2"/></g></g></svg>
                                </div>
                                <div className={style.title}>Web application</div>
                                <div className={style.desc}>We shapes your business idea into a product</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.icon}>
                                    <svg height="58" viewBox="0 0 58 58" width="58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-4 -8)"><path d="m.5.5h69v71h-69z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g fill="#393939"><path d="m11.9999985 49.9999985c-4.4182785.0000015-7.99999866-3.5816985-7.99999999-8v-26c-.00000019-4.4182685 3.58172149-7.99999866 7.99999999-7.99999999h26c4.4183015-.00000019 8.0000015 3.58172149 8 7.99999999v10h-2v-10c.0000015-3.3137085-2.6862985-5.9999985-6-5.99999999h-26c-3.3137085.00000149-5.9999985 2.68629149-5.99999999 5.99999999v26c.00000149 3.3137015 2.68629149 6.0000015 5.99999999 6h10v2z" fillRule="nonzero"/><path d="m29 58c-3.866 0-7-3.134-7-7v-18c0-3.866 3.134-7 7-7h18c3.866 0 7 3.134 7 7v11h-2v-11c0-2.7614-2.2386-5-5-5h-18c-2.7614 0-5 2.2386-5 5v18c0 2.7614 2.2386 5 5 5h11v2z" fillRule="nonzero"/><path d="m46 66c-3.3137 0-6-2.6863-6-6v-10c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6zm-4-6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-10c0-2.2091-1.7909-4-4-4h-10c-2.2091 0-4 1.7909-4 4z"/><circle cx="51" cy="55" fillRule="nonzero" r="2"/></g></g></svg>
                                </div>
                                <div className={style.title}>Landing pages</div>
                                <div className={style.desc}>We shapes your business idea into a product</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.icon}>
                                    <svg height="58" viewBox="0 0 58 58" width="58" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-4 -8)"><path d="m.5.5h69v71h-69z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g fill="#393939"><path d="m11.9999985 49.9999985c-4.4182785.0000015-7.99999866-3.5816985-7.99999999-8v-26c-.00000019-4.4182685 3.58172149-7.99999866 7.99999999-7.99999999h26c4.4183015-.00000019 8.0000015 3.58172149 8 7.99999999v10h-2v-10c.0000015-3.3137085-2.6862985-5.9999985-6-5.99999999h-26c-3.3137085.00000149-5.9999985 2.68629149-5.99999999 5.99999999v26c.00000149 3.3137015 2.68629149 6.0000015 5.99999999 6h10v2z" fillRule="nonzero"/><path d="m29 58c-3.866 0-7-3.134-7-7v-18c0-3.866 3.134-7 7-7h18c3.866 0 7 3.134 7 7v11h-2v-11c0-2.7614-2.2386-5-5-5h-18c-2.7614 0-5 2.2386-5 5v18c0 2.7614 2.2386 5 5 5h11v2z" fillRule="nonzero"/><path d="m46 66c-3.3137 0-6-2.6863-6-6v-10c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6zm-4-6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-10c0-2.2091-1.7909-4-4-4h-10c-2.2091 0-4 1.7909-4 4z"/><circle cx="51" cy="55" fillRule="nonzero" r="2"/></g></g></svg>
                                </div>
                                <div className={style.title}>Marketing websites</div>
                                <div className={style.desc}>We shapes your business idea into a product</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.icon}>
                                    <svg height="17" viewBox="0 0 44 17" width="44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" transform="translate(-3 -29)"><path d="m.5.5h69v71h-69z" fill="#d8d8d8" opacity="0" stroke="#979797"/><path d="m4 45h42l-15.333204-15" stroke="#393939" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></g></svg>
                                </div>
                                <div className={style.title}>Our method of creating the product</div>
                            </div>
                </section>
            </Fragment>
        )
    }
}
