import React from 'react';

function Footer(props) {
    return (
        <footer id="contact">

            <h3>Let's build something great!</h3>

            <section class="profile">

                <a id="profile-link" href="mailto:harviator@gmail.com">E: harviator@gmail.com</a>

                <a id="profile-link" href="tel:+1-416-555-0137">P: +1-416-555-0137</a>

                <a id="profile-link"
                    href="https://drive.google.com/file/d/1a6SfhS_a1vxUoSp16MjsUUqtMsVMLzDk/view?usp=sharing"
                    target="_blank">Resume</a>

                <a id="profile-link" href="https://github.com/harviator" target="_blank">
                    <img class="project-image"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" />
                </a>

                <a id="profile-link" href="https://www.linkedin.com/" target="_blank">
                    <img height="35" src="./assets/images/LI-In-Bug.png" alt="LinkedIn Logo" /></a>
            </section>

        </footer>
    );
}

export default Footer;