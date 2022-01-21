import React from 'react';

const Projects = (props) => {
  const { className = '', ...restProps } = props;
  return (
    <section className='c-projects' {...restProps}>
      <div className='c-projects__content'>PROJECTS</div>
    </section>
  );
};

export default Projects;
