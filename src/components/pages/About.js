import React from 'react';
import harviator from '../../assets/images/harviator.png';


function About(props) {
        return (
            <section id="about">
                <img src={harviator} class="App-logo" alt="Jon Harvey Avatar" />
                <h1>JON HARVEY</h1>
                <p>Hi! I'm a pilot who is on a journey to become a developer</p>
            </section>
        );
}

export default About;