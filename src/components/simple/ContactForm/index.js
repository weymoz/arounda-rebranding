import React, { Component } from 'react';
import Select, { components } from 'react-select';
import style from './style.scss';
import Textarea from 'react-textarea-autosize';

const budgets = [
  { value: '1000', label: '$5,000 and under', name: 'budget' },
  { value: '5000', label: '$5,000 - 10,000', name: 'budget' },
  { value: '10000', label: '$10,000 - 50,000', name: 'budget' },
  { value: '50000', label: '$50,000 - 100,000', name: 'budget' },
  { value: '100000', label: '$100,000+', name: 'budget' }
];

const projects = [
    { value: 'complex services', label: 'Complex services', name: 'project' },
    { value: 'custom services', label: 'Custom services', name: 'project' }
];


const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg height="7" viewBox="0 0 13 7" width="13"><path d="m530.656854 52.6568542h-8v-8" fill="none" stroke="#111212" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -400.15137 338.653895)"/></svg>
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
      'custom services': [
          {
            name: 'Discovery',
            value: 'Discovery'
          },
          {
            name: 'UX/UI Design',
            value: 'Design'
          },
          {
            name: 'Brand Identity',
            value: 'Brand Identity'
          },
          {
            name: 'Graphic design',
            value: 'Graphic design'
          },
          {
            name: 'Development',
            value: 'Development'
          }
        ],
      'complex services': [
        {
          name: 'Platform',
          value: 'Platform'
        },
        {
          name: 'Mobile App',
          value: 'Mobile App'
        },
        {
          name: 'Web App',
          value: 'Web App'
        },
        {
          name: 'Corporate website',
          value: 'Corporate website'
        },
        {
          name: 'Landing page',
          value: 'Landing page'
        }
      ]
    },
    includeList: []
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
    console.log(e.target)
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
          <input className={style.input} type='text' placeholder='What’s your name' onChange={this.handleInput} name='name'  required/>
          <label>Your name</label>
        </div>
        <div className={style.inputWrapper}>
          <input onChange={this.handleInput} className={style.input} type='email' placeholder='What’s your email' name='email' required/>
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
        {
          project ? 
                  (<div className={style.textareaWrapper}>
                    <Textarea 
                      className={style.textarea} 
                      style={{ height: '41px' }} 
                      placeholder={'Tell us more about your idea'} 
                      name='idea' 
                      onChange={this.handleInput} 
                    />
                    <label>Your message</label>
                  </div>) : null
        }
        {
          project ? 
                (<div className={style.includeWrapper}>
                  <label>What to include?</label>
                  <ul className={style.list}>
                    {include[project].map((el, i) => {
                      return (
                        <li key={i} className={`${style.item}`}>
                          <label htmlFor={el.name}>{el.name}</label>
                          <input id={el.name} name={el.name} type="checkbox" value={el.value} onChange={this.handleChoose}/>
                        </li>
                      );
                    })}
                  </ul>
                </div>) : null 
        }
        <div className={style.btnWrapper}>
          <button name='source' value='Website' className={`${style.btn} stopCursor`} >Send a request</button>
        </div>
            <input type='hidden' name='utm_source' value='utm_source'/>
            <input type='hidden' name='utm_medium' value='utm_medium'/>
            <input type='hidden' name='utm_campaign' value='utm_campaign'/>
            <input type='hidden' name='utm_content' value='utm_content'/>
            <input type='hidden' name='utm_term' value='utm_term'/>
      </form>
    );
  }
}
