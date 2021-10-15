import React from 'react';
import harviator from '../../assets/images/harviator.png';

function About(props) {
    return (
        <section style={{ height: '95vh' }} id="about">
            <img src={harviator} className="App-logo" alt="Jon Harvey Avatar" />
            {"\n"}
            <h5>A full stack web developer</h5>
            <p>with a background in aviation and a desire to build things that make a difference.  Recently completed a certificate in full stack development from the University of Toronto School of Continuing Studies, with skills in JavaScript, CSS, React.js, and responsive web design.  Known to be organized and passionate about developing apps, with a focus on mobile first design and development.  With each project, my aim is to engage my audience for an impactful user experience.  I applied aspects of UX and agile development in a recent project.  Working with a team of four to develop a single-page MERN app, we set out to connect farmers to customers in their local community to sell their product.  I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build great experiences on the web.</p>
        </section>
    );
}

export default About;