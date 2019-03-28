import React from 'react';
import '../index.css';
import UserLogin from '../containers/UserLogin';

function Landing() {
  return (
    <div className="container-fluid landing-container">
      <div className="row landing-top-row align-items-center">
        <div className="col landing-col">PSc5 Trivia</div>
      </div>
      <div className="row landing-bottom-row align-items-center justify-content-center">
        <UserLogin />
      </div>
    </div>
  );
}

export default Landing;