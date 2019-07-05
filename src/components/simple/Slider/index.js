import React from 'react';
import Slider from 'react-slick';
import style from './style.scss';

const SliderSingle = (props) => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 800,
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
            <Slider {...settings}>
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
    )
};
export default SliderSingle;