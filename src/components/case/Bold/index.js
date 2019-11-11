import React, { Fragment, Component } from 'react';
import s from './style.scss';

import Title from '@simple/Title';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import CustomLink from '@simple/CustomLink';


export default class BoldCase extends Component {
    render() {
        return (
            <Fragment>
                <section className={s.sectionHead}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <Title text={'Move mountains, move waves'} />
                            </div>
                            <div className={s.descWrapper}>
                                <Description text={'What was first a small design tweak request turned into a complete makeover of an existing app, leading us to replace poor usability and a crude UI with a fresh interface and intelligent app-flow. We took Bold from a UX audit and niche analysis to complex product development and go-to-market strategy.'} />
                            </div>
                        </div>
                        <div className={s.linkWrapper}>
                            <CustomLink text={'iOS App'} />
                        </div>
                    </div>
                </section>
                <section className={s.sectionBg}>
                    <img src="assets/images/bold/bold-hero.jpg" alt="bold image" />
                </section>
                <section className={s.sectionServices}>
                    <div className={s.contentWrapper}>
                        <ul className={s.list}>
                            <li>
                                <div data-number={'01'} className={s.titleWrapper}>
                                    <TitleSecondary text={'Project idea'} />
                                </div>
                                <Description light text={'Bold is an application that helps users “get bold” with the help of meditation and pep talks. Being bold means understanding yourself and fighting against negative thoughts. It brings out your inner strength and makes you more confident mentally and emotionally. The iOS app was made to help people relax with amazing videos, masterclasses, and calming music.'} />
                            </li>
                            <li>
                                <div data-number={'02'} className={s.titleWrapper}>
                                    <TitleSecondary text={'Task description'} />
                                </div>
                                <Description light text={'A client approached us to help animate app screens, carry out a UX audit, and improve the app where necessary. That was the initial task. However, the more time we spent analysing the product the more apparent it became the app needed an in-depth redesign to meet the growing market demand. Starting with a UX audit and carrying it through a complete product makeover, we uplifted the Bold app to new levels, providing users with an interactive interface for their meditation breaks.'} />
                            </li>
                        </ul>
                    </div>
                    <div className={s.panel}>
                        <div className={s.panelTitle}>
                            Services
                    </div>
                        <ul className={s.panelList}>
                            <li>Strategy</li>
                            <li>Branding</li>
                            <li>UX Design</li>
                            <li>UI Design</li>
                            <li>Development</li>
                        </ul>
                    </div>
                </section>
                <section className={s.sectionBgSecond}>
                    <img src="assets/images/bold/boldLogo-bg.jpg" alt="bold" />
                </section>
                <section className={s.sectionWhat}>
                    <div className={s.infoWrapper}>
                        <ul className={s.infoList}>
                            <li>
                                <div className={s.infoLabel}>TEAM SIZE</div>
                                <div className={s.infoText}>3+</div>
                            </li>
                            <li>
                                <div className={s.infoLabel}>TIME</div>
                                <div className={s.infoText}>11 months</div>
                            </li>
                            <li>
                                <div className={s.infoLabel}>INDUSTRY</div>
                                <div className={s.infoText}>Health & Fitness</div>
                            </li>
                        </ul>
                    </div>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrappe}>
                            <TitleSecondary text={'What is Bold?'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description light text={'Bold is a USA-based meditation guru app that helps to create a peaceful and flourishing world around its users. The app offers guided meditations and a user-friendly interface to boost users’ mental strength, intelligence, motivation, and performance. Bold users can input their goals into a friendly goal manager tool and make an action plan with reminders. The app is a source of inspirational stories and insights about bold people — Bold is the first of its kind on the market.'} />
                        </div>
                        <div className={s.linkWrapper}>
                            <CustomLink text={'Visit website'} href={'bold.app'} />
                        </div>
                    </div>
                </section>
                <section className={s.sectionComment}>
                    <div className={s.container}>
                        <blockquote>
                            <q>These guys from Arounda are really awesome! <br /> My advice - don’t think, hire them</q>
                            <div className={s.author}>
                                <div className={s.image}>
                                    <img src="assets/images/bold/bold_avatar.jpg" alt="Mikhail Nikonorov" />
                                </div>
                                <div className={s.name}>
                                    Mikhail Nikonorov
                                <div>CEO & Founder at Bold</div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
                <section className={s.sectionChallenge}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <TitleSecondary text={'Challenges and Objectives'} />
                            </div>
                            <Description light text={'Our main goal was to help users get a special feel and become mentally, emotionally, and spiritually strong after using the app'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="46" viewBox="0 0 32 46" width="32" ><g fill="none" fillRule="evenodd"><path d="m-2-13h60v60h-60z" fill="currentColor" opacity="0" /><g transform="translate(1 1)"><path d="m23 0h-16c-3.86599 0-7 3.13401-7 7v30c0 3.866 3.13401 7 7 7h16c3.866 0 7-3.134 7-7v-30c0-3.86599-3.134-7-7-7z" stroke="currentColor" strokeWidth="2" /><circle cx="15" cy="36" fill="currentColor" fillRule="nonzero" r="2" /></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Mobile app
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>UX audit and iOS app design optimization</li>
                                        <li>Optimal interaction between the text, graphics, and animations</li>
                                        <li>Powerful UX and UI design which radiates calmness</li>
                                        <li>Easy usability for users of all age groups</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="57" viewBox="0 0 51 57" width="51" ><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797" /><g transform=""><path d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3" stroke="currentColor" strokeWidth="2" /><path d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" stroke="currentColor" strokeWidth="2" /><g fill="currentColor" fillRule="nonzero"><circle cx="27.58" cy="23.1" r="2" /><circle cx="27.58" cy="33.1" r="2" /><circle cx="27.58" cy="43.1" r="2" /></g></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Landing page
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Landing page creation for a product</li>
                                        <li>Easy-to-use and user-friendly design of the main offer page</li>
                                        <li>Attractive and interactive home-screen and other interfaces</li>
                                        <li>Insightful content and App Store optimization</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.itemIcon}>
                                    <svg height="56" viewBox="0 0 80 56" width="80" ><g fill="none" fillRule="evenodd"><path d="m-2.5-3.5h89v59h-89z" fill="#d8d8d8" opacity="0" stroke="#979797" /><path d="m31 11.47v-3.47c0-3.86599325-3.1340068-7-7-7h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.79" stroke="currentColor" strokeWidth="2" /><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" stroke="currentColor" strokeWidth="2" /><g fill="currentColor" fillRule="nonzero"><circle cx="31" cy="23" r="2" /><circle cx="31" cy="33" r="2" /><path d="m29 43c0-1.1045695.8954305-2 2-2s2 .8954305 2 2-.8954305 2-2 2-2-.8954305-2-2" /></g></g></svg>
                                </div>
                                <div className={s.itemTitle}>
                                    Go-to-market
                            </div>
                                <div className={s.itemList}>
                                    <ul>
                                        <li>Product launch & marketing strategy across all relevant mediums</li>
                                        <li>Use of marketing tools for the promotion of the product</li>
                                        <li>Integration with charity organizations</li>
                                        <li>Gamification and self-development approach</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionCheck}>
                    <div className={s.container}>
                        <div className={s.title}>
                            <span>Let`s check</span><br />
                            Bold process
                </div>
                    </div>
                </section>
                <section className={s.sectionMobile}>
                    <div className={s.contentWrapper}>
                        <div className="titleWrapper">
                            <Title text={'Mobile app'} />
                        </div>
                        <Description light text={'Once the UX audit was made we found major issues and several missing screens in the UX-flow that ended up making it difficult to interact with the initial app. Our senior development team rethought the app UX and came up with a new unique interface.'} />
                    </div>
                    <div className={s.imageWrapper}>
                        <div className={s.image}>
                            <img src={'assets/images/bold/boldMobile-1.jpg'} alt={'velonto image'}/>                           
                        </div> 
                        <div className={s.image}>
                            <img src={'assets/images/bold/boldMobile-2.jpg'} alt={'velonto image'}/>
                        </div> 
                        <div className={s.image}>
                            <img src={'assets/images/bold/boldMobile-3.jpg'} alt={'velonto image'}/>
                        </div> 
                    </div> 
                </section>
            </Fragment>
        )
    }
}
