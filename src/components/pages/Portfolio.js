import React from 'react';

function Portfolio(props) {
    return (
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
    );
}

export default Portfolio;