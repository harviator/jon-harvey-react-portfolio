import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

import React, {useState, useEffect} from 'react';

function App() {

  // state/  value-holder/value-setter
  const [ownerName, setOwnerName] = useState("Jon Harvey");

  return (
    <div>
      <Navbar/>


      <main>

        <About ownerName={ownerName}/>

        <section id="work">

          <h2>Check out some of my work below</h2>

          <div class="projects-grid">

            <div class="project-tile">
              <img class="project-image" src="./assets/images/super-auction-kart.png"
                alt="Screen Shot of Super Auction Kart" />
              <p>Super Auction Kart</p>
              <a href="https://github.com/harviator/project-2-auction-site" target="_blank">Repository<span
                class="material-icons">launch</span></a>
              <a href="https://enigmatic-taiga-76650.herokuapp.com/" target="_blank">Deployed<span
                class="material-icons">launch</span></a>
            </div>

            <div class="project-tile">
              <img class="project-image" src="./assets/images/note-taker.png" alt="Screen Shot of Note Taker" />
              <p>Note Taker</p>
              <a href="https://github.com/harviator/note-taker" target="_blank">Repository<span
                class="material-icons">launch</span></a>
              <a href="https://afternoon-fjord-14538.herokuapp.com/" target="_blank">Deployed<span
                class="material-icons">launch</span></a>
            </div>

            <div class="project-tile">
              <img class="project-image" src="./assets/images/wx-screen-shot.png"
                alt="Screen Shot of Weather Dashboard" />
              <p>Weather Dashboard</p>
              <a href="https://github.com/harviator/weather-dashboard" target="_blank">Repository<span
                class="material-icons">launch</span></a>
              <a href="https://harviator.github.io/weather-dashboard/" target="_blank">Deployed<span
                class="material-icons">launch</span></a>
            </div>

          </div>
        </section>

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
