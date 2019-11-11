import React , {PureComponent}from 'react';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import style from './style.scss';
import { HashLink as Link } from 'react-router-hash-link';

import data from '@/data/ServiceSlide';

class CapabilitySection extends PureComponent {

  state ={
    current: 'itemB'
  }

  handleChange = (e) => {
    const id = e.target.getAttribute('href').substr(11,5);
  
    this.setState({
      current: id
    })
  }

  render() {
    const {current} = this.state;
    return (
      <section className={style.capability}>
        <div className={style.content}>
          <div className={style.titleWrapper}>
            <TitleSecondary text='Capabilities' />
          </div>
          <div className={style.descWrapper}>
            <Description
              light={true}
              text='We use our skills to make successful digital products that create results'
            />
          </div>
        </div>
        <div className={style.image}>
          {
              data.map(el => {
                return (
                  <img src={el.hoverImage} key={el.title} className={`${current === el.id ? style.active : ''}`} alt={el.title} />
                )
              })
            }
          
        </div>
        <div className={style.list}>
          {
            data.map(el => {
              return (
                <Link
                  to={`/services/#${el.id}`} key={el.id}
                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className={`${style.link} stopCursor`}
                  onMouseEnter={this.handleChange}
                >
                  <span className={style.item} tabIndex='-1'>{el.title}</span>
                </Link>
              )
            })
          }
        </div>
      </section>
    );
  }
};

export default CapabilitySection;
