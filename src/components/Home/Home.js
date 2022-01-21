import React from 'react';
import Computer3D from '../3D/Computer3D';
import * as Scroll from 'react-scroll';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { scrollSettings } from '../../constants/scrollSettings';

const Home = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <section className='c-home' {...restProps}>
      <div className='c-home__intro'>
        <h2>Hi, my name is Alen</h2>
        <h2>I'm a developer from Sydney</h2>
        <h2>Welcome to my portfolio</h2>
      </div>

      <div className='c-home__3d-container'>
        <Computer3D />
      </div>
      <div className='c-home__button-container'>
        <Link
          className='c-home__button-container__button'
          to='contact'
          {...scrollSettings}
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default Home;
