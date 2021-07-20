import React, { Component } from 'react';
import harviator from '../images/harviator.png';

class About extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: "value"
        }

    }


    componentDidMount () {

    }

    // this.state.key

    // this.setState({key: "changedValue"})


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