import React, { Component, Fragment } from 'react';
import style from './style.scss';

const categoryContent = [
    {
        id: '0',
        title: 'Platforms',
        desc: 'Our team concern about your business to step into the market is fully equipped. We combine mobile and web products in one system and support successful growth by marketing websites. ',
    },
    {
        id: '1',
        title: 'Mobile applications',
        desc: 'Give your customers maximum convenience of interaction with your service and minimum time to make a key action. Increase your brand recognition, presence on a digital market and productivity of your business.',
    },
    {
        id: '2',
        title: 'Web applications',
        desc: 'Web Applications have evolved to a point where they provide such levels of interactivity and usability that rival native applications. We create web applications that are fast and responsive and user-oriented, delivering the best user experience & leading to higher engagement. We use the latest technologies and the best coding practices to process massive amounts of data with zero downtime.',
    },
    {
        id: '3',
        title: 'Corporate websites',
        desc: 'Our websites are attractive & intuitive, user-friendly and provide the high-conversion rate. Built with trending technologies, they engage audiences with beautiful design & most importantly, they convert users into customers, keeping the user wanting to stay on the site longer.',
    },
    {
        id: '4',
        title: 'Landing pages',
        desc: 'We attract your user to a given product or service. Landing pages allow for conversion increase through precise messaging, deliver a value proposition that reaches a potential customer.',
    },
    {
        id: '5',
        title: 'Brand Identity',
        desc: 'A system of actions aimed at identifying a digital product in a digital environment. Creating a variety of graphic media based on the mental shell of the product. ',
    }
]

export default class SortSection extends Component {

    state = {
        sortList: [
            {
                id: 1,
                value: 'industry'
            },
            {
                id: 2,
                value: 'project type'
            },
        ],
        selectedItem: 'project type',
        showDropdown: false,
        categories : {
            'project type': ['All projects','Platforms','Corporate websites','Web applications','Mobile applications','Landing pages','Brand Identity'],
            'industry': ['Food delivery', 'Fintech', 'Health', 'Martech']
        },
        selectedCategory: null,
    }

    handleFind = (id) => {

        const {showDropdown} = this.state;

        const answer = this.state.sortList.find(item => item.id === id);

        this.setState({
            selectedItem: answer.value,
            showDropdown: !showDropdown
        })
    }

    handlerToggle = () => {

        const {showDropdown} = this.state;

        this.setState({
            showDropdown: !showDropdown
        })
    }

    handleSelectCategory = (e) => {
        const value = e.target.value;
        console.log(value)
        this.setState({
            selectedCategory: value
        })
    }

    render() {
    
        const {sortList, selectedItem, showDropdown, categories, selectedCategory} = this.state;

        return (
            <section className={style.section}>
                <section className={style.sortSection}>
                            <div className={style.sortWrapper}>
                                <div className={style.sort}>
                                    <span>Sort by</span>
                                    <button className={style.btn} onClick={this.handlerToggle}>
                                        {selectedItem}
                                        <span className={style.arrow}>
                                            <svg height="9" viewBox="0 0 13 9" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 5.66649434 6 5.33350566-6" fill="none" stroke="#393939" /></svg>
                                        </span>
                                    </button>
                                    <div className={`${style.list} ${showDropdown ? style.show : ''}`} >
                                        <ul>
                                            {
                                                sortList.map(el => {
                                                    return (
                                                        <li onClick={() => this.handleFind(el.id)} id={el.id} key={el.id}>{el.value}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={style.categories} >
                                    <ul>
                                        {
                                            categories[selectedItem].map((el, i) => {
                                                return (
                                                    <li key={i}>
                                                        <label htmlFor={el}>{el}</label>   
                                                        <input  
                                                            type="radio" 
                                                            id={el} 
                                                            value={el} 
                                                            name={'category'}
                                                            onChange={this.handleSelectCategory}/>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                            </div>
                </section>
                {
                    selectedItem === 'project type' ?
                    categoryContent.map((el,i) => {
                        return selectedCategory === el.title && (
                            <section className={style.categorySection} key={i}>
                                <div className={style.content}>
                                        <h3 className={style.title}>{el.title}</h3>
                                        <p className={style.text}>{el.desc}</p>
                                    </div>
                                    {/* <div className={style.image}>
                                        <img src="assets/images/img-3.png" alt="image"/>
                                    </div> */}
                            </section>
                        )
                    })
                    : null
                }
            </section>
        )
    }
}
