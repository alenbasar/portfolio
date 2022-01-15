import React from 'react';

const Navigation = () => {
  return (
    <div className='c-navigation'>
      <ul className='c-navigation__list'>
        <div className='c-navigation__logo'>
          <h1>LOGO</h1>
        </div>
        <li className='c-navigation__list__item'>Home</li>
        <li className='c-navigation__list__item'>Projects</li>
        <li className='c-navigation__list__item'>About</li>
        <li className='c-navigation__list__item'>Contact</li>
        <li className='c-navigation__list__item'>Resume</li>
      </ul>
      <div className='c-navigation__social'>
        <ul className='c-navigation__social__list'>
          <li className='c-navigation__social__list__item'>GitHub</li>
          <li className='c-navigation__social__list__item'>linkedIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
