import React from 'react';
import './App.css';

function App() {
  const portfolioData = {
    name: 'Prakash Poojary',
    qualification: 'B.Tech (2023)',
    fieldOfStudy: 'Computer and Communication Engineering', // Updated: Field of Study
    college: 'MIT Manipal',
    location: 'Udupi, Karnataka, India',
    skills: [
      'MySQL', 'Jenkins', 'Linux', 'SQL', 'Docker Products',
      'React.js', 'Internet of Things (IoT)', 'Microsoft Azure', 'Git',
      'Amazon Web Services (AWS)', 'REST APIs', 'HTTPS',
      'Android Studio', 'Python (Programming Language)', 'Java', 'JavaScript',
    ],
    dob: '10/12/1998',
    links: {
      linkedin: 'www.linkedin.com/in/prakash-poojary-280798246',
      portfolio: 'https://www.crio.do/learn/portfolio/prakashpoojary2210/',
      github: 'https://github.com/prakashpoojary',
    },
  };

  return (
    <div className="portfolio">
      <div className="profile-picture">
        <img src="/profile.jpeg" alt="Profile" width="200" />
      </div>
      <h1 className="portfolio-title">{portfolioData.name}</h1>
      <div className="portfolio-section">
        <strong>Qualification:</strong> {portfolioData.qualification}
      </div>
      <div className="portfolio-section">
        <strong>Field of Study:</strong> {portfolioData.fieldOfStudy}
      </div>
      <div className="portfolio-section">
        <strong>College:</strong> {portfolioData.college}
      </div>
      <div className="portfolio-section">
        <strong>Location:</strong> {portfolioData.location}
      </div>
      <div className="portfolio-section">
        <strong>DOB:</strong> {portfolioData.dob}
      </div>
      <div className="portfolio-section">
        <strong>Skills:</strong> {portfolioData.skills.join(', ')}
      </div>
      <br /> {/* Add a line break to create space */}
      <div className="portfolio-section">
        <strong>Links:</strong>
        <ul className="links-list">
          <li>
            <a className="linkedin-button" href={portfolioData.links.linkedin}>LinkedIn Profile</a>
          </li>
          <li>
            <a className="portfolio-button" href={portfolioData.links.portfolio}>Portfolio</a>
          </li>
          <li>
            <a className="github-button" href={portfolioData.links.github}>GitHub Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
