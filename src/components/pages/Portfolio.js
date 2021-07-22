import React from 'react';
import budgetTracker from '../../assets/images/budget-tracker.png';
import noteTaker from '../../assets/images/note-taker.png';
import superAuctionKart from '../../assets/images/super-auction-kart.png';
import techBlog from '../../assets/images/tech-blog.png';
import workoutTracker from '../../assets/images/workout-tracker.png';
import wxScreenShot from '../../assets/images/wx-screen-shot.png';

function Portfolio(props) {
    return (
        <section id="work">

            <h2>Check out some of my work below</h2>

            <div className="projects-grid">

                <div className="project-tile">
                    <img className="project-image" src={techBlog}
                        alt="Screen Shot of Tech Blog" />
                    <p>Tech Blog</p>
                    <a href="https://github.com/harviator/tech-blog" target="_blank"><span><img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" /></span></a>
                    <a href="https://frozen-thicket-27798.herokuapp.com/" target="_blank">Deployed<span
                        className="material-icons">launch</span></a>
                </div>

                <div className="project-tile">
                    <img className="project-image" src={budgetTracker}
                        alt="Screen Shot of Budget Tracker" />
                    <p>Budget Tracker</p>
                    <a href="https://github.com/harviator/budget-tracker" target="_blank"><span><img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" /></span></a>
                    <a href="https://polar-thicket-93893.herokuapp.com/" target="_blank">Deployed<span
                        className="material-icons">launch</span></a>
                </div>

                <div className="project-tile">
                    <img className="project-image" src={workoutTracker}
                        alt="Screen Shot of Workout Tracker" />
                    <p>Workout Tracker</p>
                    <a href="https://github.com/harviator/workout-tracker" target="_blank"><span><img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" /></span></a>
                    <a href="https://radiant-gorge-41427.herokuapp.com/?id=60f58b2355bd210015a98ca7" target="_blank">Deployed<span
                        className="material-icons">launch</span></a>
                </div>

                <div className="project-tile">
                    <img className="project-image" src={superAuctionKart}
                        alt="Screen Shot of Super Auction Kart" />
                    <p>Super Auction Kart</p>
                    <a href="https://github.com/harviator/project-2-auction-site" target="_blank"><span><img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" /></span></a>
                    <a href="https://enigmatic-taiga-76650.herokuapp.com/" target="_blank">Deployed<span
                        className="material-icons">launch</span></a>
                </div>

                <div className="project-tile">
                    <img className="project-image" src={noteTaker} alt="Screen Shot of Note Taker" />
                    <p>Note Taker</p>
                    <a href="https://github.com/harviator/note-taker" target="_blank"><span><img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" /></span></a>
                    <a href="https://afternoon-fjord-14538.herokuapp.com/" target="_blank">Deployed<span
                        className="material-icons">launch</span></a>
                </div>

                <div className="project-tile">
                    <img className="project-image" src={wxScreenShot}
                        alt="Screen Shot of Weather Dashboard" />
                    <p>Weather Dashboard</p>
                    <a href="https://github.com/harviator/weather-dashboard" target="_blank"><span><img className="github-logo"
                        src="https://user-images.githubusercontent.com/78506767/113162427-4d0f2380-920d-11eb-88f9-bf0aec2c9029.png"
                        alt="GitHub Logo" /></span></a>
                    <a href="https://harviator.github.io/weather-dashboard/" target="_blank">Deployed<span
                        className="material-icons">launch</span></a>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;