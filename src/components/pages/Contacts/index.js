import React from 'react';
import style from './style.scss';
import ContactForm from '@simple/ContactForm';
import Title from '@simple/Title';


const Contacts = (props) => {
    return (
        <section className={style.sectionContacts}>
            <div className="container">
                <div className="grid">
                    <div className={style.titleWrapper}>
                        <Title text={'Hey, let`s talk!'}/>
                        <p>Fill in the form, or if you prefer <a href="#">send us an email</a></p>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
};
export default Contacts;