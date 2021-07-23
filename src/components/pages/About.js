import React from 'react';
import harviator from '../../assets/images/harviator.png';


function About(props) {
        return (
            <section style={{height:'95vh'}} id="about">
                <img src={harviator} className="App-logo" alt="Jon Harvey Avatar" />
                {"\n"}
                <h5>Hi! I'm a pilot who is on a journey to become a developer.</h5>
                <p>I'm currently in the UofT code boot camp.  It's full time and all we do is code.  I haven't seen natural light for about 10 weeks and I've left my wife for my laptop.  It might sound bad, but there are some real positives.  I've acquired lightning fast skills at keyboard shortcuts for cut, copy, and paste.  My fingers are in the best shape my life.  Finally, I dream about coding when I sleep, which is something I never did before.</p>
            </section>
        );
}

export default About;