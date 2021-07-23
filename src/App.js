import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {

  return (
    <Router>
      <div>
        <Navbar />    
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


/*

Notes:
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer -Done
WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio - Done
WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted - Done
WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted - Done
WHEN I load the portfolio the first time THEN the About Me title and section are selected by default - Done
WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them - Done
WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories - Done
WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message - Done
WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required - Done
WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address - Done
WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies - Done
WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) - Done

*/