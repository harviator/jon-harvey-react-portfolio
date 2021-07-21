import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

import React, {useState} from 'react';
import Portfolio from './components/Portfolio';

function App() {

  // state/  value-holder/value-setter
  const [ownerName, setOwnerName] = useState("Jon Harvey");

  return (
    <div>
      <Navbar/>


      <main>

        <About ownerName={ownerName}/>

        <Portfolio/>

        

      </main>

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
    </div>
  );
}

export default App;


/*

Notes:
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

*/