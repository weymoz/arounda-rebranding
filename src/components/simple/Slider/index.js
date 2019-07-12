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
                src: 'assets/images/rect.png',
                desc: 'The team is highly skilled at giving clear explaining and producing exceptional',
                name: 'Alvaro Sabido',
                position: 'Co-Founder & CTO, Caribu',
            },
            {
                id: '1',
                src: 'assets/images/rect.png',
                desc: 'The team is highly skilled at giving clear explaining and producing exceptional',
                name: 'Alvaro Sabido',
                position: 'Co-Founder & CTO, Caribu',
            },
            {
                id: '2',
                src: 'assets/images/rect.png',
                desc: 'The team is highly skilled at giving clear explaining and producing exceptional',
                name: 'Alvaro Sabido',
                position: 'Co-Founder & CTO, Caribu',
            },
            {
                id: '3',
                src: 'assets/images/rect.png',
                desc: 'The team is highly skilled at giving clear explaining and producing exceptional',
                name: 'Alvaro Sabido',
                position: 'Co-Founder & CTO, Caribu',
            },
        ]
    
        return (
            <div className={style.sliderWrapper}> 
                <Slider ref={el => (this.slider = el)} {...settings}>
                {
                        sliders.map(el => {
                            return (
                                <div key={el.id} >
                                    <div className={`grid ${style.slideWrapper}`} >
                                        <div className={style.image}>
                                            <img src={el.src} alt={el.name}/>
                                        </div>
                                        <div className={style.text}>{el.desc}</div>
                                        <div className='nameWrapper'>
                                            <div className={style.name}>
                                                <div>{el.name}</div>
                                                <div>{el.position}</div>
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
                            <svg height="9" viewBox="0 0 13 9" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" /></svg>
                        </span>
                    </button>
                    <button className={`${style.btn}  ${style.next}`} onClick={this.next}>
                        <span className={style.arrow}>
                            <svg height="9" viewBox="0 0 13 9" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" /></svg>
                        </span>
                    </button>
                </div>
            </div>
        )
    }
};
export default SliderSingle;