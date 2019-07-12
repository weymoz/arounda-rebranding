import React, { Component } from 'react';
import Select, {components} from 'react-select';
import style from './style.scss';
import Textarea from 'react-textarea-autosize'; 

const budget = [
    { value: '1000', label: '1000$'},
    { value: '2000', label: '2000$'},
    { value: '3000', label: '3000$'},
    { value: '5000', label: '5000$'},
];

const project = [
    {value: 'custom', label: 'Custom'},
    {value: 'complex services', label: 'Complex services'},
]

const include = [
    {
        name: 'custom',
        include: ['Complex platform', 'Mobile App', 'Web App', 'Marketing website', 'Landing page']
    }
]


const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <svg height="7" viewBox="0 0 12 7" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m358.449747 56.1568542-6.292893-6.2928932v6.2928932z" fill="none" stroke="#9f9f9f" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -283.064538 214.910209)"/></svg>
        </components.DropdownIndicator>
    )
}

export default class ContactForm extends Component {


    handlerSubmit = (e) => {
        e.preventDefault();
    }



    render() {

        return (
            <form className='grid' onSubmit={this.handlerSubmit}>
                <div className={style.inputWrapper}>
                    <input 
                        className={style.input} 
                        type="text"
                        placeholder="What’s your name"
                    />
                    <label>Your name</label>
                </div>
                <div className={style.inputWrapper}>
                    <input 
                        className={style.input} 
                        type="email"
                        placeholder="What’s your email"   
                    />
                    <label>Your email</label>
                </div>
                <div className={style.selectWrapper}>
                    <Select
                        className="select"
                        classNamePrefix="select"
                        options={budget}
                        components={{DropdownIndicator}}
                        placeholder={'Project budget'}
                    />
                    <label>Project budget</label>
                </div>
                <div className={style.selectWrapper}>
                    <Select 
                        className="select"
                        classNamePrefix="select"
                        options={project}
                        components={{DropdownIndicator}}
                        placeholder={'Project type'}
                    />
                    <label>Project’s type</label>
                </div>
                <div className={style.textareaWrapper}>
                    <Textarea 
                        className={style.textarea}
                        style={{height: '42px'}}
                        placeholder={'Tell us more about your idea'}
                    />
                    <div className={style.inputFileWrapper}>
                        <input id='file' className={style.inputFile} type='file'/>
                        <label className={style.labelFile} htmlFor="file">
                            <svg height="23" viewBox="0 0 10 23" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m-5.09090909 3.99v12.18s-.17754546 2.5562727 2.4255 2.5562727c2.34722727 0 2.34722727-2.5562727 2.34722727-2.5562727v-12.81s0-3.36-3.34090909-3.36-3.34090909 3.36-3.34090909 3.36v12.81s0 4.83 4.29545455 4.83c4.29545454 0 4.29545454-4.83 4.29545454-4.83v-12.81c0-.525-.95454545-.525-.95454545 0v12.81s.34745454 3.8754545-3.34090909 3.8754545c-3.3409091 0-3.3409091-3.8754545-3.3409091-3.8754545v-12.81s0-2.40545454 2.38636364-2.40545454 2.38636364 2.40545454 2.38636364 2.40545454v12.81s0 1.5062992-1.39268182 1.5062992c-1.3926553 0-1.47095455-1.5062992-1.47095455-1.5062992v-12.18c0-.525-.95454545-.525-.95454545 0z" fill="#9d9d9d" stroke="#fff" strokeWidth=".2" transform="translate(8 1)"/></svg>
                        </label>
                    </div>
                </div>
                <div className={style.includeWrapper}>
                    <label>What to include?</label>
                    <ul className={style.list}>
                        {
                            include.map((el, i ) => {
                                return (
                                    el.include.map((el, i) => {
                                        return(
                                            <li key={i} className={`${style.item} ${style.active}`}>
                                                <button>{el}</button>
                                            </li>
                                        )
                                    })
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={style.btnWrapper}>
                    <button className={style.btn}>Send a request</button>
                </div>  
            </form>
        )
    }
}