import React from 'react';
import LoginButton from '../components/LoginButton';
import landingBanner from '../images/landingpage.png';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="container">
            <div className ="title">
            <h1>Project A</h1>
            </div>
            <div className ="descr">
            <h3>Upload | Analyze | Score</h3>
            </div>
            <div className="buttonContainer">
                <LoginButton/>
            </div>
        </div>
    )
}

export default LandingPage
