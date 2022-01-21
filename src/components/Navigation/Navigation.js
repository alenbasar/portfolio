import React from 'react';
import { DesktopMenu } from '../../constants/menu';
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
import data from '../../assets/svgs.json';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

const Navigation = () => {
  const renderDesktopMenu = (menuItem) => {
    if (menuItem.to) {
      return (
        <Link
          className='c-navigation__desktop-menu__item'
          to={menuItem.to}
          {...scrollSettings}
        >
          {menuItem.label}
        </Link>
      );
    }
    return (
      <a
        className='c-navigation__desktop-menu__item'
        href={menuItem.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {menuItem.label}
      </a>
    );
  };

  return (
    <header className='c-navigation'>
      <div className='c-navigation__logo'>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0, 0, 400,88.13559322033899'
          className='logo'
        >
          <motion.path
            d={data.logoDrawing}
            variants={icon}
            initial='hidden'
            animate='visible'
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
      </div>
      <ul className='c-navigation__desktop-menu'>
        {DesktopMenu.map((m) => (
          <React.Fragment key={m.key}>{renderDesktopMenu(m)}</React.Fragment>
        ))}
      </ul>
    </header>
  );
};
export default Navigation;
