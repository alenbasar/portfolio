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
      <div
        className='c-navigation__logo'
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.logo) }}
      ></div>
      <ul className='c-navigation__desktop-menu'>
        {DesktopMenu.map((m) => (
          <React.Fragment key={m.key}>{renderDesktopMenu(m)}</React.Fragment>
        ))}
      </ul>
    </header>
  );
};
export default Navigation;
