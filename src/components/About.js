import React, { Component } from 'react';
import harviator from '../images/harviator.png';

class About extends Component {

    render() {
        return (
            <section id="about">
                <img src={harviator} class="App-logo" alt="Jon Harvey Avatar" />
                <h1>{this.props.ownerName}</h1>
                <p>Hi! I'm a pilot who is on a journey to become a developer</p>
            </section>
        );
    }
}

export default About;