// src/HomeComponent/HomePage.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faGavel, faUsers, faComments, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

function Home() {
  return (
    <nav className="navbar">
       <div className="navbar-logo">
        <img src='/advocase_full.png' alt="Advocase Logo" style={{ width: '150px' }} />
    </div>
      <div className="navbar-center">
        <button className="home-button">
          <FontAwesomeIcon icon={faNewspaper} /> News Feed
        </button>
        <button className="home-button">
          <FontAwesomeIcon icon={faGavel} /> Find Lawyers
        </button>
        <button className="special-home">
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
        <button className="home-button">
          <FontAwesomeIcon icon={faUsers} /> Connections
        </button>
        <button className="home-button">
          <FontAwesomeIcon icon={faComments} /> Chats
        </button>
      </div>
      <div className="navbar-profile">
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faCog} className="icon" />
        <img src="./public/download.jpeg" alt="Profile" />
      </div>
    </nav>
  );
}

export default Home;
