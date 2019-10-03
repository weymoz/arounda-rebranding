import React, {Component} from 'react';
import Slider from 'react-slick';
import style from './style.scss';

class SliderSingle extends Component{

    
    next = () => {
        this.slider.slickNext();
    }

    previous = () => {
        this.slider.slickPrev();
    }

    render(){
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 700,
        }

        const sliders = [
            {
                id: '0',
                src: 'assets/images/josef.jpg',
                srcMobile: 'assets/images/josefMob.jpg',
                desc: 'Arounda’s work and mindset represents the pinnacle of perfection while still being highly efficient and communicative.',
                name: 'Josef Chen',
                position: 'CEO, Velonto',
            },
            {
                id: '1',
                src: 'assets/images/trent.jpg',
                srcMobile: 'assets/images/trentMob.jpg',
                desc: 'Everything Arounda has produced, from design to code, has been enterprise-grade quality they are fantastic to work with!',
                name: 'Trent Waskey',
                position: 'Marketing Director, Metricly',
            },
            {
                id: '2',
                src: 'assets/images/el-asmar.jpg',
                srcMobile: 'assets/images/el-asmarMob.jpg',
                desc: 'Arounda has been our strategic partner for 3 years. A talented team that consistently delivers 1st class results on our projects.',
                name: 'El Asmar',
                position: 'CEO, Gigzi',
            },
            {
                id: '3',
                src: 'assets/images/tim.jpg',
                srcMobile: 'assets/images/timMob.jpg',
                desc: 'Professional communication, quick turnaround and consistently excellent and well considered results.',
                name: 'Tim O’Dwyer',
                position: 'Co-Founder, Lustery',
            },
            {
                id: '4',
                src: 'assets/images/mikhail.jpg',
                srcMobile: 'assets/images/mikhailMob.jpg',
                desc: 'These guys from Arounda are really awesome!  My advice -don’t think, hire them.',
                name: 'Mikhail Nikonorov ',
                position: 'CEO & Founder, Bold',
            },
        ]
    
        return (
            <div className={style.sliderWrapper}> 
                <Slider ref={el => (this.slider = el)} {...settings}>
                {
                        sliders.map(el => {
                            return (
                                <div key={el.id} >
                                    <div className={`${style.slideWrapper}`} >
                                        <div className={style.image}>
                                            <picture>
                                                <source srcSet={el.srcMobile} media="(max-width: 767px)"/>
                                                <img src={el.src} alt={el.name}/>
                                            </picture>
                                            
                                        </div>
                                        <div className={style.text}>
                                            <div className={style.textWrap}>
                                                <p>{el.desc}</p>
                                                <div className='nameWrapper'>
                                                <div className={style.name}>
                                                        <div>{el.name}</div>
                                                        <div>{el.position}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className={style.btnWrapper}>
                    <button className={`${style.btn}  ${style.prev}`} onClick={this.previous}>
                        <span className={style.arrow}>
                            <svg height="9" viewBox="0 0 13 9" width="13"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" /></svg>
                        </span>
                    </button>
                    <button className={`${style.btn}  ${style.next}`} onClick={this.next}>
                        <span className={style.arrow}>
                            <svg height="9" viewBox="0 0 13 9" width="13"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" /></svg>
                        </span>
                    </button>
                </div>
            </div>
        )
    }
};
export default SliderSingle;