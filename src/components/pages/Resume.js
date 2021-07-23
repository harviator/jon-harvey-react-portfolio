import React from 'react';

function Resume(props) {
    return (
        <section className="resume">
            <h2>Resume</h2>

            <p>Download my <a id="profile-link"
                href="https://drive.google.com/file/d/1a6SfhS_a1vxUoSp16MjsUUqtMsVMLzDk/view?usp=sharing"
                target="_blank">resume</a>
            </p>

            <h4>Front-End Technologies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Responsive Web Design</li>
            </ul>

            <h4>Back-End Technologies</h4>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
            </ul>
        </section>
    );
}

export default Resume;