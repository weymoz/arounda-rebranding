import React, {Fragment} from 'react';
import style from './style.scss';
import ContactForm from '@simple/ContactForm';
import TitleSecondary from '@simple/TitleSecondary';
import Footer from '@sections/Footer';
import DocumentMeta from 'react-document-meta';


const Contacts = (props) => {
    const meta = {
        title: 'Conatct Us | Arounda',
        description: 'Contacts',
        canonical: '',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: ''
            }
            }
        }
    return (
        <Fragment>
            <section className={style.sectionContacts}>
                
                    <div className={style.grid}>
                        <div className={style.titleWrapper}>
                            <TitleSecondary text={'Hey, let`s talk!'}/>
                            <p>Fill in the form, or if you prefer <a href="mailto:info@arounda.agency">send us an email</a></p>
                        </div>
                    </div>
                    <ContactForm/>
            </section>
            <Footer/>
            <DocumentMeta {...meta} />
        </Fragment>
    )
};
export default Contacts;