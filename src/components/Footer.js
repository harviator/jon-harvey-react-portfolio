import React from 'react';
import liIcon from '../assets/images/LI-In-Bug.png';
import soIcon from '../assets/images/stackoverflow-logo.png';

function Footer(props) {
    return (
        <footer id="contact">

            <section class="profile">               

                <a id="profile-link" href="https://github.com/harviator" target="_blank">
                    <img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" />
                </a>

                <a id="profile-link" href="https://www.linkedin.com/" target="_blank">
                    <img className="linkedin-logo" height="35" src={liIcon} alt="LinkedIn Logo" />
                </a>

                <a id="profile-link" href="https://stackoverflow.com/users/15560306/harviator?tab=profile" target="_blank">
                    <img className="stackoverflow-logo" height="35" src={soIcon} alt="Stackoverflow Logo" />
                </a>

            </section>

        </footer>
    );
}

export default Footer;