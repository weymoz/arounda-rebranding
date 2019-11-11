import React, { Component, Fragment } from 'react';
import Select, { components } from 'react-select';
import style from './style.scss';
import Textarea from 'react-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/database';
import TitleSecondary from '@simple/TitleSecondary';
import Description from '@simple/Description';
import { config } from '@/functions/firebase';
import {Link} from 'react-router-dom';

const budgets = [
  { value: '1000', label: '$5,000 and under', name: 'budget' },
  { value: '5000', label: '$5,000 - 10,000', name: 'budget' },
  { value: '10000', label: '$10,000 - 50,000', name: 'budget' },
  { value: '50000', label: '$50,000 - 100,000', name: 'budget' },
  { value: '100000', label: '$100,000+', name: 'budget' }
];

const projects = [
  { value: 'Platform', label: 'Platform', name: 'project' },
  { value: 'Mobile App', label: 'Mobile App', name: 'project' },
  { value: 'Web App', label: 'Web App', name: 'project' },
  { value: 'Corporate website', label: 'Corporate website', name: 'project' },
  { value: 'Landing page', label: 'Landing page', name: 'project' },
];




const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg height="7" viewBox="0 0 13 7" width="13"><path d="m530.656854 52.6568542h-8v-8" fill="none" stroke="#111212" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -400.15137 338.653895)" /></svg>
    </components.DropdownIndicator>
  );
};

const customStyles = {
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
    name: '',
    email: '',
    budget: '',
    project: '',
    idea: '',
    include: {
      'services': [
        {
          name: 'Strategy',
          value: 'Strategy'
        },
        {
          name: 'UX/UI Design',
          value: 'UX/UI Design'
        },
        {
          name: 'Development',
          value: 'Development'
        },
        {
          name: 'Branding',
          value: 'Branding'
        },
        {
          name: 'Graphic design',
          value: 'Graphic design'
        }
      ]
    },
    includeList: [],
    disable: false,
    emptyValue: false,
    successSend: false
  };

  componentDidMount() {
    if(firebase.apps.length){
      firebase.app();
    }else{
      firebase.initializeApp(config);
    }
  }

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

    if (e.target.matches(`.${style.textarea}`) && e.target.value) {
      e.target.parentElement.classList.add(style.filled);
    }
  };

  handleChange = (option, value, hasValue) => {
    this.setState({
      [option.name]: option.value
    });
  };

  clearValues = () => {
    this.select.state.value = '';
    this.setState({
      disable: false,
      name: '',
      email: '',
      budget: '',
      project: '',
      idea: '',
      includeList: []
    })
  }

  handleChoose = e => {
    const parent = e.target.parentElement;
    if (!parent.classList.contains(style.active)) {
      this.setState({
        includeList: [...this.state.includeList, e.target.value]
      });

      parent.classList.add(style.active);
    } else {
      this.setState({
        includeList: this.state.includeList.filter(item => e.target.value !== item)
      });
      parent.classList.remove(style.active);
    }
  };

  handlerSubmit = e => {
    const { name, email, budget, project, idea, includeList, disable, successSend } = this.state;
    e.preventDefault();
    if (name && email && budget && project && idea && includeList.length > 0) {
      const generateId = () => ('_' + Math.random().toString(36).substr(2, 9))
      const date = Date.now();
      const messagesRef = firebase.database().ref('requests');

      this.setState({
        disable: true,
        emptyValue: false
      })
      messagesRef.push({
        id: generateId(),
        date: date,
        name: name,
        email: email,
        type: project,
        budget: budget,
        description: idea,
        services: includeList,
        answered: false
      }).then(() => {
        this.clearValues();
        this.setState({
          successSend: true,
          disable: false
        })
      });
    }else{
      this.setState({
        emptyValue: true
      })
    }
  }

  render() {
    const { name, email, project, include, budget, disable, emptyValue, successSend } = this.state;
    return (
      <Fragment>
      <form className={style.grid} onSubmit={this.handlerSubmit}>
        <div className={style.inputWrapper}>
          <input className={style.input} value={name} type='text' placeholder='What’s your name' onChange={this.handleInput} name='name' required />
          <label>Your name</label>
        </div>
        <div className={style.inputWrapper}>
          <input onChange={this.handleInput} value={email} className={style.input} type='email' placeholder='What’s your email' name='email' required />
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
            ref={c => (this.select = c)}
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
            placeholder={`Project's type`}
            name='project'
            isSearchable={false}
            ref={c => (this.select = c)}
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
        </div>
        <div className={style.includeWrapper}>
              <label>Services</label>
              <ul className={style.list}>
                {include['services'].map((el, i) => {
                  return (
                    <li key={i} className={`${style.item}`}>
                      <label htmlFor={el.name}>{el.name}</label>
                      <input id={el.name} name={el.value} type="checkbox" value={el.value} onChange={this.handleChoose} />
                    </li>
                  );
                })}
              </ul>
        </div>
        {
          emptyValue ? 
          <div className={style.emptyValue}>
            You must fill in all required fields
          </div> : null
        }
        <div className={style.btnWrapper}>
          <button
            name='source'
            onSubmit={this.handlerSubmit}
            className={`${style.btn} stopCursor ${disable ? style.disable : ''}`}
            tabIndex='-1'>
            Send a request
            </button>
        </div>
      </form>
      {
        successSend ? 
          <div className={style.success}>
            <TitleSecondary text={'Thank you!'}/>
            <div className={style.descWrapper}>
              <Description light text={'We will contact you as soon as possible.'} />
            </div>
            <div className={style.linkWrapper}>
              <Link className={style.btn} to={'/'}>Go to Home page</Link>
            </div>
          </div> : null
      }
      </Fragment>
    );
  }
}
