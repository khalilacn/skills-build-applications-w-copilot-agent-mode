import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Activities from './components/Activities';
import Workouts from './components/Workouts';
import Teams from './components/Teams';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              🐙 OctoFit Tracker
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container mt-5">
      <div className="home-hero">
        <h1>Welcome to OctoFit Tracker</h1>
        <p className="lead">Track your fitness activities and compete with your team!</p>
        <p>Use the navigation menu above to explore activities, workouts, teams, and the leaderboard.</p>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Track Activities</h5>
              <p className="card-text">Log your daily fitness activities and monitor your progress.</p>
              <Link to="/activities" className="btn btn-primary">View Activities</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Personalized Workouts</h5>
              <p className="card-text">Get workout suggestions tailored to your fitness level.</p>
              <Link to="/workouts" className="btn btn-primary">View Workouts</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Join Teams</h5>
              <p className="card-text">Create or join a team and compete with friends.</p>
              <Link to="/teams" className="btn btn-primary">View Teams</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Leaderboard</h5>
              <p className="card-text">See where you stand on the competitive leaderboard.</p>
              <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
