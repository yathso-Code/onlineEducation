import React from 'react';
import './About.css';

function About() {
  return (
    <>
    <div className='about_box'>
      
    <div className="row">
    <div className="left-column">
      <h2 className="left-heading">Responsive Two Column Layout</h2>
      <p className="left-paragraph">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      <button className="btn success">HIRE ME</button>
      <button className="btn info">Live Demo</button>
     </div>
   <div className="right-column">
     <img src='https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'/>
   </div>
   </div>
    </div>
    </>
  )
}

export default About