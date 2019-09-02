import React, { Component, Fragment } from 'react';
import style from './style.scss';

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
        selectedItem: 'industry',
        showDropdown: false,
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

    render() {
        const categories = [
            'All project type',
            'Complex platform',
            'Corporate websites',
            'Web applications',
            'Mobile applications',
            'Landing pages',
            'Branding'
        ]

        const {sortList, selectedItem, showDropdown} = this.state;

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
                            <div className={style.categories}>
                                    <ul>
                                        {
                                            categories.map((el, i) => {
                                                return (
                                                    <li key={i}>
                                                        <button>{el}</button>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                            </div>
                </section>
                <section className={style.categorySection}>
                            <div className={style.content}>
                                    <h3 className={style.title}>Complex platforms</h3>
                                    <p className={style.text}>We have expertise working on the ecosystem of the products, and we are ready to provide non-standard solutions. Our team concern about your business to step into the market is fully equipped. </p>
                                </div>
                                <div className={style.image}>
                                    <img src="assets/images/img-3.png" alt="image"/>
                                </div>
                </section>
            </section>
        )
    }
}
