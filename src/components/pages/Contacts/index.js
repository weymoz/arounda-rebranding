import React from 'react';
import style from './style.scss';
import ContactForm from '@simple/ContactForm';
import TitleSecondary from '@simple/TitleSecondary';


const Contacts = (props) => {
    return (
        <section className={style.sectionContacts}>
                <div className={style.grid}>
                    <div className={style.titleWrapper}>
                        <TitleSecondary text={'Hey, let`s talk!'}/>
                        <p>Fill in the form, or if you prefer <a href="#">send us an email</a></p>
                    </div>
                </div>
                <ContactForm/>
        </section>
    )
};
export default Contacts;