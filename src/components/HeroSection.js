import React from 'react';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="../videos/video-2" autoPlay loop muted/> */}
            <h1>Bare Artificial Intelligence</h1>
            <p>Unlock The Power of AI</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--otline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
