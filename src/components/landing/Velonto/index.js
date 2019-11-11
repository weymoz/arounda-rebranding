import React, { Fragment, Component } from 'react';
import s from './style.scss';

import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';
import { Controller, Scene } from 'react-scrollmagic';
import ScrollMagic from 'scrollmagic';


import Title from '@simple/Title';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import CustomLink from '@simple/CustomLink';
import list from '@/data/Innovation';
import data from '@/data/Works';
import Footer from '@sections/Footer';



export default class Velonto extends Component {
    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    controller = new ScrollMagic.Controller();

    settings = {
        slidesToScroll: 1,
        slidesToShow: 1.23,
        infinite: false,
        responsive: [
            {
                breakpoint: 1296,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    render() {
        return (
            <Fragment>
                <section className={s.sectionHead}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text={'Food Delivery'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description text={'Rapid and innovative solutions for startups'} />
                        </div>
                        <Link className={s.link} to="/contact">Let's discuss your project</Link>
                    </div>
                </section>
                <section className={s.sectionService}>
                    <div className={s.titleWrapper}>
                        <TitleSecondary text={'From the concept idea to full-fledged development and product support'} />
                    </div>
                    <div className={s.descWrapper}>
                        <Description light text={"We operate throughout the entire life cycle of the idea realization on the market to support startups feautering idea, product's strategy, design, ongoing maintenance and growth"} />
                    </div>
                    <div className={s.row}>
                        {
                            list.map(el => {
                                return (
                                    <div className={s.item} key={el.id}>
                                        <div className={s.image}>
                                            {parse(el.image)}
                                        </div>
                                        <div className={s.text}> <span className={s.number}>{el.number}</span>{el.text}</div>
                                        <div className={s.desc}>{el.desc}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className={s.sectionQuote}>
                    <div className={s.row}>
                    <MediaQuery minDeviceWidth={500}>
                        {matches => {
                            if (matches) {
                            return (
                                <q className={s.quote}><span>We empower products with</span><br/> <span>innovative, different from</span><br/> <span>competitors sense</span></q>
                            );
                            } else {
                            return <q className={s.quote}><span>We empower</span> <span>products with</span> <span>innovative, different</span> <span>from competitors</span> <br/><span>sense</span></q>
                            }
                        }}
                    </MediaQuery>
                        
                    </div>
                </section>
                <section className={s.sectionSupport}>
                    <div className={s.contentWrapper }>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'We support business on any stage of product development'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description light text={'We can strengthen your own team or assume the whole range of work'}/>
                        </div>
                    </div>
                    <div  className={s.scrollWrapper}>
                        <div className={s.horizontalScrollWrapper}>
                            <div className={s.horizontalScroll}>
                                <div className={s.slide}>
                                    <div className={s.image}>
                                        <img src={'assets/images/card1.jpg'}  alt='Website'/>
                                    </div>
                                    <div className={s.slideDesc}>
                                        <div className={s.title}>
                                            Website
                                        </div>
                                        <div className={s.categories}>
                                            Strategy, Branding, UX/UI Design, Frontend development  
                                        </div>
                                    </div>
                                </div>
                                <div className={s.slide}>
                                    <div className={s.image}>
                                        <img src={'assets/images/card2.jpg'}  alt='Tablet App'/>
                                    </div>
                                    <div className={s.slideDesc}>
                                        <div className={s.title}>
                                            Tablet App
                                        </div>
                                        <div className={s.categories}>
                                            UX/UI Design, Frontend development, Graphic design
                                        </div>
                                    </div>
                                </div>
                                <div className={s.slide}>
                                    <div className={s.image}>
                                        <img src={'assets/images/card1.jpg'}  alt='Website'/>
                                    </div>
                                    <div className={s.slideDesc}>
                                        <div className={s.title}>
                                            Website
                                        </div>
                                        <div className={s.categories}>
                                            Strategy, Branding, UX/UI Design, Frontend development  
                                        </div>
                                    </div>
                                </div>
                                <div className={s.slide}>
                                    <div className={s.image}>
                                        <img src={'assets/images/card2.jpg'}  alt='Tablet App'/>
                                    </div>
                                    <div className={s.slideDesc}>
                                        <div className={s.title}>
                                            Tablet App
                                        </div>
                                        <div className={s.categories}>
                                            UX/UI Design, Frontend development, Graphic design
                                        </div>
                                    </div>
                                </div>
                                <div className={s.slide}>
                                    <div className={s.image}>
                                        <img src={'assets/images/card1.jpg'}  alt='Website'/>
                                    </div>
                                    <div className={s.slideDesc}>
                                        <div className={s.title}>
                                            Website
                                        </div>
                                        <div className={s.categories}>
                                            Strategy, Branding, UX/UI Design, Frontend development  
                                        </div>
                                    </div>
                                </div>
                                <div className={s.slide}>
                                    <div className={s.image}>
                                        <img src={'assets/images/card2.jpg'}  alt='Tablet App'/>
                                    </div>
                                    <div className={s.slideDesc}>
                                        <div className={s.title}>
                                            Tablet App
                                        </div>
                                        <div className={s.categories}>
                                            UX/UI Design, Frontend development, Graphic design
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </section>
                <section className={s.sectionSlider}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'We create the perfect interaction process for each participant'} />
                        </div>
                        <Description light text={'We focus not only on the result that the user of the service receives, as well as on the process of interaction with the product'} />
                    </div>
                    <div className={s.panel}>
                        <div className={s.panelTitle}>Customer panel</div>
                        <ul className={s.panelList}>
                            <li>Social Media Login</li>
                            <li>Nearby Restaurants</li>
                            <li>Restaurant Menu </li>
                            <li>Order Tracking</li>
                            <li>inApp Payments </li>
                            <li>Rating & Reviews</li>
                            <li>Coupon Management</li>
                        </ul>
                        <div className={s.panelButtons}  >
                            <button className={s.prev} tabIndex="-1" onClick={this.previous}>
                                <span className={s.arrow}>
                                    <svg height="9" viewBox="0 0 13 9" width="13"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" strokeWidth="2px" /></svg>
                                </span>
                            </button>
                            <button className={s.next} tabIndex="-1" onClick={this.next}>
                                <span className={s.arrow}>
                                    <svg height="9" viewBox="0 0 13 9" width="13"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" strokeWidth="2px" /></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className={s.slider}>
                        <Slider ref={el => (this.slider = el)} {...this.settings}>
                            {
                                data.map(el => {
                                    return (
                                        <div className={s.image} key={el.id}>
                                            <img src={'assets/images/slide01-velonto.jpg'} alt={el.title} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </section>
                <section className={s.sectionValues}>
                    <div className={s.contentWrapper}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Values ​​on which our work is based'} />
                        </div>
                        <Description light text={'We are proud that combination of emerging technologies, team knowledge and business ideas of our customers leads to products with a global reach '} />
                    </div>
                    <div className={s.fixedPanel}>
                        <ul className={s.panelList}>
                            <li>
                                <span className={s.number}><span>01</span></span>
                                <p>Openness and empathy towards the client </p>
                            </li>
                            <li>
                                <span className={s.number}><span>02</span></span>
                                <p>Opacity of processes and respect to invested time</p>
                            </li>
                            <li>
                                <span className={s.number}><span>03</span></span>
                                <p>Efficiency and attention to details</p>
                            </li>
                        </ul>
                    </div>
                    <div className={s.columnWrapper}>
                        <div className={`${s.column} ${s.columnFirst}`}>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg height="77" viewBox="0 0 76 77" width="76" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="matrix(0 -1 -1 0 76 77)"><g fill="#393939"><path d="m41 3c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3"/><path d="m41 73c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3"/><path d="m76 38c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3"/><path d="m6 38c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3"/></g><g transform="matrix(0 -1 -1 0 59 54)"><path d="m16.8 33.6c-9.27826667 0-16.8-7.5217333-16.8-16.8 0-9.27826667 7.52173333-16.8 16.8-16.8 9.2773333 0 16.8 7.52173333 16.8 16.8 0 9.2782667-7.5226667 16.8-16.8 16.8" fill="#6b6b6b"/><path d="m16.8 25.2c4.6396 0 8.4 3.7604 8.4 8.4s-3.7604 8.4-8.4 8.4-8.4-3.7604-8.4-8.4 3.7604-8.4 8.4-8.4" fill="#393939"/><path d="m8.6744 31.5009333c2.4089333 1.3346667 5.1772 2.0990667 8.1256 2.0990667s5.7157333-.7644 8.1246667-2.0990667c-.9333334-3.6213333-4.2121334-6.3009333-8.1246667-6.3009333s-7.19133333 2.6796-8.1256 6.3009333" fill="#fff"/></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    Strategy
                            </div>
                                <TitleSecondary text={'We protect your idea'} />
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg height="76" viewBox="0 0 76 76" width="76"><mask id="a" fill="#fff"><path d="m.0002 0h5.9998v6h-5.9998z" fill="none"/></mask><mask id="b" fill="#fff"><path d="m.0002 0h5.9998v6h-5.9998z" fill="none"/></mask><g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 349 -90)"><g transform="translate(288 105)"><path d="m29.3579212 15.7782447c6.7156505 6.8794468 6.7156505 18.0339574 0 24.914383-6.7166059 6.8794468-17.6055329 6.8794468-24.32118336 0-6.71565045-6.8804256-6.71565045-18.0349362 0-24.914383 6.71565046-6.87944683 17.60457746-6.87944683 24.32118336 0" fill="#393939" opacity=".75"/><path d="m40.8425529 4.01301064c5.2232837 5.35068085 5.2232837 14.02706386 0 19.37774466-5.2242391 5.3516596-13.6930861 5.3516596-18.9163698 0-5.2242391-5.3506808-5.2242391-14.02706381 0-19.37774466 5.2232837-5.35068085 13.6921307-5.35068085 18.9163698 0" fill="#393939"/><path d="m18.3509997 10.6184149c-1.1560587 4.4463404.3143334 9.4329362 3.7204073 12.9201277 3.4041632 3.4881702 7.982538 4.698851 12.3230132 3.5145957 1.1570142-4.4463404.2847153-9.4554468-3.1204032-12.9426383-3.4041631-3.4881702-8.5825421-4.67634043-12.9230173-3.4920851" fill="#fff"/></g><g fill="#393939" transform="translate(273 90)"><path d="m6.0002 3c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3s1.343-3 3-3c1.656 0 3 1.343 3 3" mask="url(#a)" transform="translate(70)"/><path d="m6 3c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3s1.343-3 3-3c1.656 0 3 1.343 3 3"/><path d="m6.0002 3c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3s1.343-3 3-3c1.656 0 3 1.343 3 3" mask="url(#b)" transform="translate(70 70)"/><path d="m6 73c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3s1.343-3 3-3c1.656 0 3 1.343 3 3"/></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    UX design
                            </div>
                                <TitleSecondary text={'Consultation &  Assessment'} />
                            </div>
                        </div>
                        <div className={`${s.column} ${s.columnSecond}`}>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg height="76" viewBox="0 0 76 76" width="76"><mask id="a" fill="#fff"><path d="m0 0h5.9998v6h-5.9998z" fill="none"/></mask><mask id="b" fill="#fff"><path d="m0 0h5.9998v6h-5.9998z" fill="none"/></mask><g fill="none" fill-rule="evenodd" transform="matrix(-1 0 0 1 76 0)"><g transform="matrix(.70710678 -.70710678 .70710678 .70710678 7.326641 38.646447)"><path d="m36.8655553 7.21339907c8.1892838 8.18778603 8.1892838 21.46466973 0 29.65245583-8.187786 8.1892837-21.463172 8.1892837-29.65245577 0-8.18778604-8.1877861-8.18778604-21.4646698 0-29.65245583 8.18928377-8.18778605 21.46466977-8.18778605 29.65245577 0" fill="#6b6b6b"/><path d="m14.9767442 7.48837209c0 4.13657671-3.3517954 7.48837211-7.48837211 7.48837211-4.13507907 0-7.48837209-3.3517954-7.48837209-7.48837211 0-4.13507907 3.35329302-7.48837209 7.48837209-7.48837209 4.13657671 0 7.48837211 3.35329302 7.48837211 7.48837209" fill="#393939"/><path d="m2.95146698 13.4088288c1.26253953.9689954 2.82311628 1.5680652 4.53645581 1.5680652 4.13657671 0 7.48837211-3.3517954 7.48837211-7.48837214 0-1.71483721-.5975721-3.27541395-1.5680651-4.53645581-2.2420186 1.0124279-4.35224189 2.41724651-6.19438143 4.26088372-1.84363721 1.84363721-3.24845581 3.95236283-4.26238139 6.19587903" fill="#fff"/><path d="m44.5528186 7.48837209c0 4.13657671-3.353293 7.48837211-7.4883721 7.48837211-4.1365767 0-7.4883721-3.3517954-7.4883721-7.48837211 0-4.13507907 3.3517954-7.48837209 7.4883721-7.48837209 4.1350791 0 7.4883721 3.35329302 7.4883721 7.48837209" fill="#393939"/><path d="m41.259133 13.6911405c-1.0199163-2.3498512-2.4711628-4.55592562-4.3941767-6.4774419-1.7492837-1.74928372-3.7381954-3.10168372-5.8529116-4.1036279-.892614 1.23408372-1.4362698 2.73774883-1.4362698 4.37770232 0 4.13657678 3.353293 7.48837208 7.4883721 7.48837208 1.554586 0 2.9983442-.4732651 4.194986-1.2850046" fill="#fff"/><path d="m14.9767442 37.6524335c0 4.1365767-3.3517954 7.4883721-7.48837211 7.4883721-4.13507907 0-7.48837209-3.3517954-7.48837209-7.4883721 0-4.1365768 3.35329302-7.4883721 7.48837209-7.4883721 4.13657671 0 7.48837211 3.3517953 7.48837211 7.4883721" fill="#393939"/><path d="m7.48837209 30.1640614c-1.54709767 0-2.98636279.4687721-4.1800093 1.2760186.98097674 1.9544651 2.27346977 3.7936093 3.90443721 5.4260744 1.99190698 1.991907 4.2893395 3.4895814 6.7350419 4.5109954.6365116-1.1007907 1.0289023-2.3618326 1.0289023-3.7247163 0-4.1365768-3.3517954-7.4883721-7.48837211-7.4883721" fill="#fff"/><path d="m44.5528186 37.6524335c0 4.1365767-3.353293 7.4883721-7.4883721 7.4883721-4.1365767 0-7.4883721-3.3517954-7.4883721-7.4883721 0-4.1365768 3.3517954-7.4883721 7.4883721-7.4883721 4.1350791 0 7.4883721 3.3517953 7.4883721 7.4883721" fill="#393939"/><path d="m40.865694 31.2345991c-1.1172652-.6634698-2.4067628-1.0708372-3.8010977-1.0708372-4.1365768 0-7.4883721 3.3517953-7.4883721 7.4883721 0 1.2909953.3564465 2.4891348.9330511 3.5494883 2.3034233-1.0154232 4.4690605-2.4472 6.3561303-4.3357674 1.6893767-1.6878791 3.0088279-3.6004093 4.0002884-5.6312558" fill="#fff"/></g><g fill="#393939"><path d="m76.9998 3c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3"/><path d="m5.9998 3c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3" mask="url(#a)" transform="translate(.995724)"/><path d="m76.9998 73c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3"/><path d="m5.9998 3c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3" mask="url(#b)" transform="translate(.995724 70)"/></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    Development
                            </div>
                                <TitleSecondary text={'Rapid Agile Development '} />
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg height="76" viewBox="0 0 76 76" width="76"><mask id="a" fill="#fff"><path d="m0 0h5.9996v6h-5.9996z" fill="none"/></mask><mask id="b" fill="#fff"><path d="m0 0h5.9996v6h-5.9996z" fill="none"/></mask><g fill="none" fill-rule="evenodd" transform="matrix(0 1 -1 0 76 0)"><g transform="translate(15 15)"><path d="m39.26307 6.73647c8.98288 8.98196 8.98288 23.54556 0 32.5266-8.98196 8.98196-23.54464 8.98196-32.5266 0-8.98196-8.98104-8.98196-23.54464 0-32.5266s23.54464-8.98196 32.5266 0" fill="#6b6b6b"/><path d="m32.106942 13.892506c5.03056 5.02964 5.03056 13.18544 0 18.21508-5.02964 5.03056-13.18452 5.03056-18.21508 0-5.02964-5.02964-5.02964-13.18544 0-18.21508 5.03056-5.02964 13.18544-5.02964 18.21508 0" fill="#fff"/><path d="m32.101606 32.107402c-1.58792 1.58792-3.4868 2.67076-5.50068 3.2568-4.80148-7.51732-4.80148-17.21136 0-24.72868 2.01388.58604 3.91276 1.6698 5.50068 3.2568 5.03056 5.02964 5.03056 13.18544 0 18.21508" fill="#393939"/></g><g fill="#393939"><path d="m75.9996 3c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3"/><path d="m5.9996 3c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3" mask="url(#a)"/><path d="m75.9996 73c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3"/><path d="m5.9996 3c0 1.657-1.343 3-3 3-1.656 0-3-1.343-3-3s1.344-3 3-3c1.657 0 3 1.343 3 3" mask="url(#b)" transform="translate(0 70)"/></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    UI design
                            </div>
                                <TitleSecondary text={'Support & Maintenance'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionIdea}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <Title text={'Have an idea or a finished product?'} />
                        </div>
                        <div className={s.descWrapper}>
                            <Description text={'We are ready to enhance you'} />
                        </div>
                        <div className={s.linkWrapper}>
                            <CustomLink large text={'Send a request'} href={'/contact'} />
                        </div>
                    </div>
                </section>
                <section className={s.sectionKnow}>
                    <div className={s.image}>
                        <img src="assets/images/android-velonto.jpg" alt="velonto" />
                    </div>
                    <div className={s.content}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'We know how to convert complexity into competitive advantages'} />
                        </div>
                        <div className={s.descWrapper}>
                            <p>Integrated project solution for <a href='velonto.at' className={s.link}>Velonto</a></p>
                        </div>
                        <ul className={s.list}>
                            <li><span>Website Landing pages</span></li>
                            <li><span>Web client app</span></li>
                            <li><span>iOS biker app / Android biker app</span></li>
                            <li><span>iOS client app / Android client app</span></li>
                            <li><span>Admin panel</span></li>
                            <li><span>Tablet restaurant/Shop app</span></li>
                        </ul>
                    </div>
                </section>
                <section className={s.sectionKey}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'What are the key business challenges'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.column}>
                                <div className={`${s.item} ${s.itemFirst}`}>
                                    <div className={s.content}>
                                        <div className={s.title}>Developed a flexible logistics system</div>
                                        <div className={s.desc}>We adapted the Clark-Wright method for optimal delivery of several food orders from a restaurant by one courier, taking into account all the specifics of such delivery </div>
                                    </div>
                                    <div className={s.number}>01</div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.content}>
                                        <div className={s.title}>Built motivation for executors</div>
                                        <div className={s.desc}>Created a motivation system for couriers in the application with the division of orders by delivery area. As a result, the best couriers can receive the best orders in the best areas and earn more</div>
                                    </div>
                                    <div className={s.number}>03</div>
                                </div>
                            </div>
                            <div className={s.column}>
                                <div className={`${s.item} ${s.itemFirst}`}>
                                    <div className={s.content}>
                                        <div className={s.title}>Have created universal platform </div>
                                        <div className={s.desc}>We developed a universal order processing system for shops and restaurants without a direct connection to the partner’s internal system.Added a system for the quick integration of new partners on the platform.</div>
                                    </div>
                                    <div className={s.number}>02</div>
                                </div>
                                <div className={s.item}>
                                    <div className={s.content}>
                                        <div className={s.title}>Implemented innovative solutions for online transactions/payments</div>
                                        <div className={s.desc}>Developed a solution for online payment of all orders in the service and the further distribution of funds between process participants. Guaranteed a refund to the client, until the receipt of your order</div>
                                    </div>
                                    <div className={s.number}>04</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionResult}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'As a result'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.number}>01</div>
                                <div className={s.textWrapper}>
                                    <div className={s.title}>Increased business<br /> liquidity</div>
                                    <div className={s.desc}>Fulfil time of each order dicreased in 40-50%</div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>02</div>
                                <div className={s.textWrapper}>
                                    <div className={s.title}>Developed a sophisticated logistics system </div>
                                    <div className={s.desc}>Thus we optimized costs and expedited delivery by x%</div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>03</div>
                                <div className={s.textWrapper}>
                                    <div className={s.title}>Dicreased company expenses</div>
                                    <div className={s.desc}>By developing a unique staff motivation delivery system</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionBg}>
                    <img src={'assets/images/sectionBg-velonto.jpg'} alt='velonto background' />
                </section>
                <section className={s.sectionFlexible}>
                    <div className={s.container}>
                        <div className={s.titleWrapper}>
                            <TitleSecondary text={'Flexible customer-oriented interaction model'} />
                        </div>
                        <div className={s.row}>
                            <div className={s.item}>
                                <div className={s.number}>01</div>
                                <div className={s.text}>
                                    <div className={s.title}>Time & Material</div>
                                    <div className={s.desc}>Keep resources flexible to meet evolving requirements </div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>03</div>
                                <div className={s.text}>
                                    <div className={s.title}>Team involvement</div>
                                    <div className={s.desc}>Choose a team that sincerely stands for the result </div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>02</div>
                                <div className={s.text}>
                                    <div className={s.title}>Open Estimation</div>
                                    <div className={s.desc}>Track the time to complete each task </div>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.number}>04</div>
                                <div className={s.text}>
                                    <div className={s.title}>Discussion and testing</div>
                                    <div className={s.desc}>Expand your business and find milestones for growth with us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionOurTeam}>
                    <div className={s.titleWrapper}>
                        <TitleSecondary text={'Our team becomes the heart of the product since the start'} />
                    </div>
                    <div className={s.contentWrapper}>
                        <ul className={s.list}>
                            <li>
                                <div className={s.number}><span>01</span></div>
                                <p>More than <b>4 years</b> we create unique business solutions</p>
                            </li>
                            <li>
                                <div className={s.number}><span>02</span></div>
                                <p><b>Over 40</b> completed projects and successfully realized business goals</p>
                            </li>
                            <li>
                                <div className={s.number}><span>03</span></div>
                                <p>Conversion <b>increasing on x%</b> in user</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`${s.column} ${s.columnFirst}`}>
                        <div className={`${s.item} ${s.strategy}`}>
                            <div className={s.image}>
                                <img src="assets/images/chess.png" alt="chess" />
                            </div>
                            <div className={s.category}>
                                Strategy
                            </div>
                            <div className={s.title}>
                                <TitleSecondary text={'Project manager'} />
                            </div>
                        </div>
                        <div className={`${s.item} ${s.branding}`}>
                            <div className={s.image}>
                                <img src="assets/images/gasbottle.png" alt="gasbottle" />
                            </div>
                            <div className={s.category}>
                                Branding
                            </div>
                            <div className={s.title}>
                                <TitleSecondary text={'Graphic & Motion designer'} />
                            </div>
                        </div>
                    </div>
                    <div className={`${s.column} ${s.columnSecond}`}>
                        <div className={`${s.item} ${s.design}`}>
                            <div className={s.image}>
                                <img src="assets/images/icecream.png" alt="icecream" />
                            </div>
                            <div className={s.category}>
                                Design
                            </div>
                            <div className={s.title}>
                                <TitleSecondary text={'UX/UI designer'} />
                            </div>
                        </div>
                        <div className={`${s.item} ${s.development}`}>
                            <div className={s.image}>
                                <img src="assets/images/dna.png" alt="dna" />
                            </div>
                            <div className={s.category}>
                                Development
                            </div>
                            <div className={s.title}>
                                <TitleSecondary text={'Front-end developer'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={s.sectionJourney}>
                    <div className={s.container}>
                        <div className={s.contentWrapper}>
                            <div className={s.titleWrapper}>
                                <TitleSecondary text={'The best journey always begins with the first step'} />
                            </div>
                            <div className={s.descWrapper}>
                                <Description text={' Will be happy to  discuss your ideas!'} />
                            </div>
                        </div>
                        <form className={s.form}>
                            <div className={s.inputWrapper}>
                                <input className={s.input} type='text' placeholder='What’s your name' name='name' required />
                                <label>Your name</label>
                            </div>
                            <div className={s.inputWrapper}>
                                <input className={s.input} type='email' placeholder='What’s your email' name='email' required />
                                <label>Your email</label>
                            </div>
                            <div className={s.btnWrapper}>
                                <CustomLink button text={'Send a request'} />
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </Fragment>
        )
    }
}
