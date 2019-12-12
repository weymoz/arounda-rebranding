import React, { Component, Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TweenMax, TimelineMax } from 'gsap';
import { render } from 'react-dom';
import MediaQuery from 'react-responsive';
import noScroll from 'no-scroll';
import 'firebase/database';

import './style.scss';
import Cursor from '@simple/Cursor';

import Header from '@sections/Header';
import Main from '@pages/Main';
import Work from '@pages/Work';
import Services from '@pages/Services';
import Contacts from '@pages/Contacts';
import Aside from '@sections/Aside';
import Preloader from '@simple/Preloader';
import ScrollToTop from '@simple/ScrollToTop';
import PageNotFound from '@pages/PageNotFound';
import Velonto from '@landing/Velonto';
import BoldCase from '@case/Bold';
import Blog from '@pages/Blog';


class App extends Component {
  state = {
    openMenu: false,
    preloader: true,
    isPaused: true,
  };

  

  componentDidMount() {
    setTimeout(() => {
      this.tl()
    }, 100)
    
    noScroll.on();
  }
  tl = () => {
      const mainTl = new TimelineMax();
      const headerTl = new TimelineMax();
      const mainSection = new TimelineMax();

      headerTl.add(this.header.tl);

      this.main && mainSection.add(this.main.tl);

      mainTl.add(mainSection, 'start').add(headerTl, '-=3').call(this.noScrollOff);
  };

  noScrollOff = () => {
    noScroll.off();
  }

  toggleMenu = () => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: !openMenu
    });

    noScroll.toggle()
  };
  handleCloseMenu = e => {
    const { openMenu } = this.state;
    if (e.target.matches('.menu-link')) {
      this.setState({
        openMenu: !openMenu
      });
      noScroll.off()
    }
  };

  render() {
    const { openMenu, preloader, activeStyle, showContent } = this.state;

    return (
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
                  activeStyle={activeStyle}
                />
                <Aside openMenu={openMenu} handleCloseMenu={this.handleCloseMenu} />
                <Switch>
                  <Route path='/' exact component={() => <Main ref={el => (this.main = el)} />} showContent={showContent} />
                  <Route path='/works' exact component={Work} />
                  <Route path='/contact' exact component={Contacts} />
                  <Route path='/services' exact component={Services} />
                  <Route path="/velonto" exact component={Velonto}/>
                  <Route path="/boldCase" exact component={BoldCase}/>
                  <Route path="/blog" exact component={Blog}/>
                  <Route component={PageNotFound}/>
                </Switch>
              </div>
            </ScrollToTop>
          </Router>
    );
  }
}

render(<App />, document.querySelector('#app'));
