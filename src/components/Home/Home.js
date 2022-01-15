import React from 'react';
import Computer3D from '../3D/Computer3D';

const Home = () => {
  return (
    <section className='c-home'>
      <div className='c-home__intro'>
        <h2>Hi, my name is Alen</h2>
        <h2>I'm a developer from Sydney</h2>
        <h2>Welcome to my portfolio</h2>
      </div>

      <div className='c-home__3d-container'>
        <Computer3D />
      </div>
      <div className='c-home__button-container'>
        <button className='c-home__button-container__button'>
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Home;
