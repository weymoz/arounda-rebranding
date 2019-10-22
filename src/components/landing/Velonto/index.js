import React, { Fragment, Component } from 'react';
import s from './style.scss';

import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';

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
                <section>

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
                                    <svg viewBox="0 0 82 112" ><g fill="none" transform="translate(-.5)"><path d="m21.6739004 21.6521-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m21.6739004 14-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m21.4324004 13.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.17393201-12.1739c-.152949-.0923-.245038-.2592-.241574-.4378s.101955-.3418.258368-.4281zm-18.93252001 11.5876 19.17182001 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m1.50000039 32.7825v-7.6521l20.17390001 12.1739v7.6522z" fill="#393939" /><path d="m1.25420239 24.695c.157063-.0887.349708-.0859.504128.0073l20.17387001 12.1739c.15.0905.2417.2529.2417.4281v7.6522c0 .1803-.0971.3467-.2542.4354-.1571.0886-.3497.0858-.5041-.0073l-20.17393201-12.174c-.149988-.0905-.241668-.2529-.241668-.4281v-7.6521c0-.1804.097138-.3468.254202-.4354zm.745798 1.3211v6.4842l19.17390001 11.5704v-6.4842z" fill="#393939" /><path d="m41.4999004 32.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><path d="m41.7440004 24.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" fill="#393939" /><path d="m61.6739004 83.6521-20.1739 11.1304 20.1739 12.1735 19.8261-12.1735z" stroke="#393939" /><path d="m61.6739004 76-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m61.4324004 75.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.1739-12.1739c-.153-.0923-.2451-.2592-.2416-.4378s.1019-.3418.2584-.4281zm-18.9325 11.5876 19.1718 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m41.5000004 94.7825v-7.6521l20.1739 12.1739v7.6517z" fill="#393939" /><path d="m41.5000004 87.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.1735-.2583.429c.1544.093.347.096.5041.007s.2542-.255.2542-.436zm0-7.6517h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.1744.5166-.857-20.1739-12.1735zm20.9322 11.7454v-7.6517h-1v7.6517zm-.2417-8.0798-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m81.4999004 94.7825v-7.6521l-19.8261 12.1739v7.6517z" fill="#fff" /><path d="m81.7440004 86.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1744c-.1543.094-.3478.098-.5058.01-.158-.089-.2559-.255-.2559-.437v-7.6517c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.479l18.8261-11.5602v-6.4787z" fill="#393939" /><path d="m41.6739004 52.6521-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m41.6739004 45-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#69feda" stroke="#393939" /><path d="m21.5000004 63.7825v-7.6521l20.1739 12.1739v7.6522z" fill="#393939" /><path d="m21.5000004 56.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.174-.2583.4281c.1544.0931.347.0959.5041.0073.1571-.0887.2542-.2551.2542-.4354zm0-7.6522h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.174.5166-.8562-20.1739-12.1739zm20.9322 11.7459v-7.6522h-1v7.6522zm-.2417-8.0803-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m61.4999004 63.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><g fill="#393939"><path d="m61.7440004 55.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" /><path d="m21.0000004 56v-11h1v11z" /><path d="m41.0000004 45v-13h1v13z" /><path d="m41.0000004 87v-11h1v11z" /><path d="m61.0000004 76v-13h1v13z" /><path d="m21.5000004 2.5c.2761 0 .5.223858.5.5v11c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-11c0-.276142.2239-.5.5-.5z" /></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    Strategy
                            </div>
                                <TitleSecondary text={'We protect your idea'} />
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg viewBox="0 0 82 112" ><g fill="none" transform="translate(-.5)"><path d="m21.6739004 21.6521-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m21.6739004 14-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m21.4324004 13.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.17393201-12.1739c-.152949-.0923-.245038-.2592-.241574-.4378s.101955-.3418.258368-.4281zm-18.93252001 11.5876 19.17182001 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m1.50000039 32.7825v-7.6521l20.17390001 12.1739v7.6522z" fill="#393939" /><path d="m1.25420239 24.695c.157063-.0887.349708-.0859.504128.0073l20.17387001 12.1739c.15.0905.2417.2529.2417.4281v7.6522c0 .1803-.0971.3467-.2542.4354-.1571.0886-.3497.0858-.5041-.0073l-20.17393201-12.174c-.149988-.0905-.241668-.2529-.241668-.4281v-7.6521c0-.1804.097138-.3468.254202-.4354zm.745798 1.3211v6.4842l19.17390001 11.5704v-6.4842z" fill="#393939" /><path d="m41.4999004 32.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><path d="m41.7440004 24.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" fill="#393939" /><path d="m61.6739004 83.6521-20.1739 11.1304 20.1739 12.1735 19.8261-12.1735z" stroke="#393939" /><path d="m61.6739004 76-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m61.4324004 75.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.1739-12.1739c-.153-.0923-.2451-.2592-.2416-.4378s.1019-.3418.2584-.4281zm-18.9325 11.5876 19.1718 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m41.5000004 94.7825v-7.6521l20.1739 12.1739v7.6517z" fill="#393939" /><path d="m41.5000004 87.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.1735-.2583.429c.1544.093.347.096.5041.007s.2542-.255.2542-.436zm0-7.6517h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.1744.5166-.857-20.1739-12.1735zm20.9322 11.7454v-7.6517h-1v7.6517zm-.2417-8.0798-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m81.4999004 94.7825v-7.6521l-19.8261 12.1739v7.6517z" fill="#fff" /><path d="m81.7440004 86.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1744c-.1543.094-.3478.098-.5058.01-.158-.089-.2559-.255-.2559-.437v-7.6517c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.479l18.8261-11.5602v-6.4787z" fill="#393939" /><path d="m41.6739004 52.6521-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m41.6739004 45-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#69feda" stroke="#393939" /><path d="m21.5000004 63.7825v-7.6521l20.1739 12.1739v7.6522z" fill="#393939" /><path d="m21.5000004 56.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.174-.2583.4281c.1544.0931.347.0959.5041.0073.1571-.0887.2542-.2551.2542-.4354zm0-7.6522h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.174.5166-.8562-20.1739-12.1739zm20.9322 11.7459v-7.6522h-1v7.6522zm-.2417-8.0803-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m61.4999004 63.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><g fill="#393939"><path d="m61.7440004 55.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" /><path d="m21.0000004 56v-11h1v11z" /><path d="m41.0000004 45v-13h1v13z" /><path d="m41.0000004 87v-11h1v11z" /><path d="m61.0000004 76v-13h1v13z" /><path d="m21.5000004 2.5c.2761 0 .5.223858.5.5v11c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-11c0-.276142.2239-.5.5-.5z" /></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    Strategy
                            </div>
                                <TitleSecondary text={'Consultation &  Assessment'} />
                            </div>
                        </div>
                        <div className={`${s.column} ${s.columnSecond}`}>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg viewBox="0 0 82 112" ><g fill="none" transform="translate(-.5)"><path d="m21.6739004 21.6521-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m21.6739004 14-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m21.4324004 13.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.17393201-12.1739c-.152949-.0923-.245038-.2592-.241574-.4378s.101955-.3418.258368-.4281zm-18.93252001 11.5876 19.17182001 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m1.50000039 32.7825v-7.6521l20.17390001 12.1739v7.6522z" fill="#393939" /><path d="m1.25420239 24.695c.157063-.0887.349708-.0859.504128.0073l20.17387001 12.1739c.15.0905.2417.2529.2417.4281v7.6522c0 .1803-.0971.3467-.2542.4354-.1571.0886-.3497.0858-.5041-.0073l-20.17393201-12.174c-.149988-.0905-.241668-.2529-.241668-.4281v-7.6521c0-.1804.097138-.3468.254202-.4354zm.745798 1.3211v6.4842l19.17390001 11.5704v-6.4842z" fill="#393939" /><path d="m41.4999004 32.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><path d="m41.7440004 24.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" fill="#393939" /><path d="m61.6739004 83.6521-20.1739 11.1304 20.1739 12.1735 19.8261-12.1735z" stroke="#393939" /><path d="m61.6739004 76-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m61.4324004 75.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.1739-12.1739c-.153-.0923-.2451-.2592-.2416-.4378s.1019-.3418.2584-.4281zm-18.9325 11.5876 19.1718 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m41.5000004 94.7825v-7.6521l20.1739 12.1739v7.6517z" fill="#393939" /><path d="m41.5000004 87.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.1735-.2583.429c.1544.093.347.096.5041.007s.2542-.255.2542-.436zm0-7.6517h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.1744.5166-.857-20.1739-12.1735zm20.9322 11.7454v-7.6517h-1v7.6517zm-.2417-8.0798-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m81.4999004 94.7825v-7.6521l-19.8261 12.1739v7.6517z" fill="#fff" /><path d="m81.7440004 86.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1744c-.1543.094-.3478.098-.5058.01-.158-.089-.2559-.255-.2559-.437v-7.6517c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.479l18.8261-11.5602v-6.4787z" fill="#393939" /><path d="m41.6739004 52.6521-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m41.6739004 45-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#69feda" stroke="#393939" /><path d="m21.5000004 63.7825v-7.6521l20.1739 12.1739v7.6522z" fill="#393939" /><path d="m21.5000004 56.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.174-.2583.4281c.1544.0931.347.0959.5041.0073.1571-.0887.2542-.2551.2542-.4354zm0-7.6522h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.174.5166-.8562-20.1739-12.1739zm20.9322 11.7459v-7.6522h-1v7.6522zm-.2417-8.0803-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m61.4999004 63.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><g fill="#393939"><path d="m61.7440004 55.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" /><path d="m21.0000004 56v-11h1v11z" /><path d="m41.0000004 45v-13h1v13z" /><path d="m41.0000004 87v-11h1v11z" /><path d="m61.0000004 76v-13h1v13z" /><path d="m21.5000004 2.5c.2761 0 .5.223858.5.5v11c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-11c0-.276142.2239-.5.5-.5z" /></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    Strategy
                            </div>
                                <TitleSecondary text={'Rapid Agile Development '} />
                            </div>
                            <div className={s.card}>
                                <div className={s.image}>
                                    <svg viewBox="0 0 82 112" ><g fill="none" transform="translate(-.5)"><path d="m21.6739004 21.6521-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m21.6739004 14-20.17390001 11.1304 20.17390001 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m21.4324004 13.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.17393201-12.1739c-.152949-.0923-.245038-.2592-.241574-.4378s.101955-.3418.258368-.4281zm-18.93252001 11.5876 19.17182001 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m1.50000039 32.7825v-7.6521l20.17390001 12.1739v7.6522z" fill="#393939" /><path d="m1.25420239 24.695c.157063-.0887.349708-.0859.504128.0073l20.17387001 12.1739c.15.0905.2417.2529.2417.4281v7.6522c0 .1803-.0971.3467-.2542.4354-.1571.0886-.3497.0858-.5041-.0073l-20.17393201-12.174c-.149988-.0905-.241668-.2529-.241668-.4281v-7.6521c0-.1804.097138-.3468.254202-.4354zm.745798 1.3211v6.4842l19.17390001 11.5704v-6.4842z" fill="#393939" /><path d="m41.4999004 32.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><path d="m41.7440004 24.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" fill="#393939" /><path d="m61.6739004 83.6521-20.1739 11.1304 20.1739 12.1735 19.8261-12.1735z" stroke="#393939" /><path d="m61.6739004 76-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#fff" /><path d="m61.4324004 75.5622c.1515-.0836.3354-.0829.4863.0018l19.8261 11.1304c.1546.0868.2516.249.2551.4263.0035.1772-.0872.3431-.2383.4358l-19.8261 12.1739c-.1593.0979-.3599.0986-.5199.002l-20.1739-12.1739c-.153-.0923-.2451-.2592-.2416-.4378s.1019-.3418.2584-.4281zm-18.9325 11.5876 19.1718 11.5692 18.8413-11.5693-18.8412-10.5775z" fill="#393939" /><path d="m41.5000004 94.7825v-7.6521l20.1739 12.1739v7.6517z" fill="#393939" /><path d="m41.5000004 87.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.1735-.2583.429c.1544.093.347.096.5041.007s.2542-.255.2542-.436zm0-7.6517h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.1744.5166-.857-20.1739-12.1735zm20.9322 11.7454v-7.6517h-1v7.6517zm-.2417-8.0798-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m81.4999004 94.7825v-7.6521l-19.8261 12.1739v7.6517z" fill="#fff" /><path d="m81.7440004 86.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1744c-.1543.094-.3478.098-.5058.01-.158-.089-.2559-.255-.2559-.437v-7.6517c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.479l18.8261-11.5602v-6.4787z" fill="#393939" /><path d="m41.6739004 52.6521-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" stroke="#393939" /><path d="m41.6739004 45-20.1739 11.1304 20.1739 12.1739 19.8261-12.1739z" fill="#69feda" stroke="#393939" /><path d="m21.5000004 63.7825v-7.6521l20.1739 12.1739v7.6522z" fill="#393939" /><path d="m21.5000004 56.1304.2583-.4281c-.1544-.0932-.347-.096-.5041-.0073-.1571.0886-.2542.255-.2542.4354zm0 7.6521h-.5c0 .1752.0917.3376.2417.4281zm20.1739 12.174-.2583.4281c.1544.0931.347.0959.5041.0073.1571-.0887.2542-.2551.2542-.4354zm0-7.6522h.5c0-.1752-.0917-.3376-.2417-.4281zm-20.6739-12.1739v7.6521h1v-7.6521zm.2417 8.0802 20.1739 12.174.5166-.8562-20.1739-12.1739zm20.9322 11.7459v-7.6522h-1v7.6522zm-.2417-8.0803-20.1739-12.1739-.5166.8562 20.1739 12.1739z" fill="#393939" /><path d="m61.4999004 63.7825v-7.6521l-19.8261 12.1739v7.6522z" fill="#fff" /><g fill="#393939"><path d="m61.7440004 55.694c.158.0884.2559.2553.2559.4364v7.6521c0 .1738-.0902.3352-.2384.4261l-19.826 12.1739c-.1543.0948-.3478.0987-.5058.0103s-.2559-.2553-.2559-.4363v-7.6522c0-.1738.0903-.3352.2384-.4261l19.8261-12.1739c.1543-.0948.3477-.0987.5057-.0103zm-19.5702 12.89v6.4787l18.8261-11.5599v-6.4787z" /><path d="m21.0000004 56v-11h1v11z" /><path d="m41.0000004 45v-13h1v13z" /><path d="m41.0000004 87v-11h1v11z" /><path d="m61.0000004 76v-13h1v13z" /><path d="m21.5000004 2.5c.2761 0 .5.223858.5.5v11c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5v-11c0-.276142.2239-.5.5-.5z" /></g></g></svg>
                                </div>
                                <div className={s.category}>
                                    Strategy
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
                            <div className={s.item}>
                                <div className={s.content}>
                                    <div className={s.title}>Developed a flexible logistics system</div>
                                    <div className={s.desc}>We adapted the Clark-Wright method for optimal delivery of several food orders from a restaurant by one courier, taking into account all the specifics of such delivery </div>
                                </div>
                                <div className={s.number}>01</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.content}>
                                    <div className={s.title}>Have created universal platform </div>
                                    <div className={s.desc}>We developed a universal order processing system for shops and restaurants without a direct connection to the partner’s internal system.Added a system for the quick integration of new partners on the platform.</div>
                                </div>
                                <div className={s.number}>02</div>
                            </div>
                            <div className={s.item}>
                                <div className={s.content}>
                                    <div className={s.title}>Built motivation for executors</div>
                                    <div className={s.desc}>Created a motivation system for couriers in the application with the division of orders by delivery area. As a result, the best couriers can receive the best orders in the best areas and earn more</div>
                                </div>
                                <div className={s.number}>03</div>
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
