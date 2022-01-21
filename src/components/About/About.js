import React from 'react';

const About = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <section className='c-about' {...restProps}>
      <div className='c-about__content'>ABOUT</div>
    </section>
  );
};

export default About;
