import React, { Component } from 'react';
import Select, { components } from 'react-select';
import style from './style.scss';
import Textarea from 'react-textarea-autosize';

const budgets = [
  { value: '1000', label: '$1000 +', name: 'budget' },
  { value: '2000', label: '$2000 +', name: 'budget' },
  { value: '3000', label: '$3000 +', name: 'budget' },
  { value: '5000', label: '$9000 +', name: 'budget' }
];

const projects = [
    { value: 'custom services', label: 'Custom services', name: 'project' }, 
    { value: 'complex services', label: 'Complex services', name: 'project' }
];


const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg height="7" viewBox="0 0 13 7" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m530.656854 52.6568542h-8v-8" fill="none" stroke="#111212" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -400.15137 338.653895)"/></svg>
    </components.DropdownIndicator>
  );
};

const customStyles ={
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#111212' : '#9FA4A6',
  }),
  container: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid',
      borderColor: state.hasValue ? '#30FDDC' : 'rgba(157, 157, 157, 0.158)'
  })
} 

export default class ContactForm extends Component {
  state = {
    name: null,
    email: null,
    budget: null,
    project: null,
    idea: null,
    include: {
      'custom services': ['Strategy', 'UХ Design', 'UI Design', 'Branding', 'Development'],
      'complex services': ['Complex platform', 'Mobile App', 'Web App', 'Marketing website', 'Landing page']
    },
    includeList: []
  };

  handlerSubmit = e => {
    e.preventDefault();
  };

  handleInput = e => {
    const label = e.target.parentElement.querySelector('label');

    if (e.target.value) {
      e.target.classList.add(style.active);
      label.classList.add(style.active);
    } else {
      e.target.classList.remove(style.active);
      label.classList.remove(style.active);
    }

    this.setState({
      [e.target.name]: e.target.value
    });

    if(e.target.matches(`.${style.textarea}`) && e.target.value){
      e.target.parentElement.classList.add(style.filled);
    }
  };

  handleChange = (option,value,hasValue) => {
    this.setState({
      [option.name]: option.value
    });
  };

  handleChoose = e => {
    const parent = e.target.parentElement;
    if (!parent.classList.contains(style.active)) {
      this.setState({
        includeList: [...this.state.includeList, e.target.innerHTML]
      });

      parent.classList.add(style.active);
    } else {
      this.setState({
        includeList: this.state.includeList.filter(item => e.target.innerHTML !== item)
      });
      parent.classList.remove(style.active);
    }
  };


  render() {
    const {project, include, budget} = this.state;

    return (
      <form className={style.grid} onSubmit={this.handlerSubmit}>
        <div className={style.inputWrapper}>
          <input className={style.input} type='text' placeholder='What’s your name' onChange={this.handleInput} name='name' />
          <label>Your name</label>
        </div>
        <div className={style.inputWrapper}>
          <input onChange={this.handleInput} className={style.input} type='email' placeholder='What’s your email' name='email' />
          <label>Your email</label>
        </div>
        <div className={style.selectWrapper}>
          <Select
            styles={customStyles}
            className='select'
            classNamePrefix='select'
            options={budgets}
            onChange={this.handleChange}
            components={{ DropdownIndicator }}
            placeholder={'Project budget'}
            name='budget'
            isSearchable={false}
          />
          <label className={`${budget ? style.active : ''}`}>Project budget</label>
        </div>
        <div className={style.selectWrapper}>
          <Select
            styles={customStyles}   
            className='select'
            classNamePrefix='select'
            options={projects}
            onChange={this.handleChange}
            components={{ DropdownIndicator }}
            placeholder={'Project type'}
            name='project'
            isSearchable={false}
          />
          <label className={`${project ? style.active : ''}`}>Project’s type</label>
        </div>
        <div className={style.textareaWrapper}>
          <Textarea 
            className={style.textarea} 
            style={{ height: '41px' }} 
            placeholder={'Tell us more about your idea'} 
            name='idea' 
            onChange={this.handleInput} 
          />
          <label>Your message</label>
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
        </div>
        {
          project ? 
                (<div className={style.includeWrapper}>
                  <label>What to include?</label>
                  <ul className={style.list}>
                    {include[project].map((el, i) => {
                      return (
                        <li onClick={this.handleChoose} key={i} className={`${style.item}`}>
                          <button>{el}</button>
                        </li>
                      );
                    })}
                  </ul>
                </div>) : null 
        }
        <div className={style.btnWrapper}>
          <button className={style.btn}>Send a request</button>
        </div>
      </form>
    );
  }
}
