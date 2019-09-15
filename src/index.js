import React, { Component, Fragment, Suspense } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { TweenMax, TimelineMax } from 'gsap';
import { render } from 'react-dom';
import MediaQuery from 'react-responsive';

import './style.scss';
import Cursor from '@simple/Cursor';

import Header from '@sections/Header';
import Main from '@pages/Main';
import Work from '@pages/Work';
import Services from '@pages/Services';
import Contacts from '@pages/Contacts';
import Blog from '@pages/Blog';
import BlogItem from '@pages/BlogItem';
import Footer from '@sections/Footer';
import Aside from '@sections/Aside';
import Preloader from '@simple/Preloader';
import ScrollToTop from '@simple/ScrollToTop';

const freezeScroll = e => {
  e.preventDefault;
};

class App extends Component {
  state = {
    openMenu: false,
    preloader: true
  };

  componentDidMount() {
    this.setState({
      preloader: !this.state.preloader
    });

    setTimeout(() => {
      this.tl();
    }, 100);
  }

  tl = () => {
    const mainTl = new TimelineMax();
    const headerTl = new TimelineMax();
    const mainSection = new TimelineMax();

    headerTl.add(this.header.tl);

    this.main && mainSection.add(this.main.tl);

    mainTl.add(mainSection, 'start').add(headerTl, '-=3');
  };

  toggleMenu = () => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: !openMenu
    });

    document.documentElement.classList.toggle('no-scroll');
    if (openMenu) {
      document.body.removeEventListener('touchmove', freezeScroll, false);
    } else {
      document.body.addEventListener('touchmove', freezeScroll, false);
    }
  };
  handleCloseMenu = e => {
    const { openMenu } = this.state;
    if (e.target.matches('.menu-link')) {
      this.setState({
        openMenu: !openMenu
      });
      document.documentElement.classList.remove('no-scroll');
      document.body.removeEventListener('touchmove', freezeScroll, false);
    }
  };

  render() {
    const { openMenu, preloader } = this.state;

    return preloader ? (
      <Preloader />
    ) : (
      <Router>
        <ScrollToTop>
          <div className='grid'>
            <MediaQuery minDeviceWidth={1081}>
              {matches => {
                return matches ? <Cursor /> : null;
              }}
            </MediaQuery>
            <Header
              ref={el => {
                this.header = el;
              }}
              toggleMenu={this.toggleMenu}
              openMenu={openMenu}
            />
            <Aside openMenu={openMenu} handleCloseMenu={this.handleCloseMenu} />
            <Route path='/' exact component={() => <Main ref={el => (this.main = el)} />} />
            <Route path='/works' exact component={Work} />
            <Route path='/contact' exact component={Contacts} />
            <Route path='/services' exact component={Services} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/blog/:id' exact component={BlogItem} />
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

render(<App />, document.querySelector('#app'));
