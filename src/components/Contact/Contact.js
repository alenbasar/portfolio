import React from 'react';

const Contact = (props) => {
  const { className = '', ...restProps } = props;

  return (
    <section className='c-contact' {...restProps}>
      <div className='c-contact__content'>CONTACT</div>
    </section>
  );
};
export default Contact;
