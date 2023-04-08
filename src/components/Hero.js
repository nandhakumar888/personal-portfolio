import React from 'react'
import "../reset.css";
import '../styles/Hero.css'

import TypeWriterEffect from 'react-typewriter-effect';


function Hero() {
    return (
        <div>
            <section className="hero-section" id="home">
                <div className="container-xl">
                    <div className="row">
                        <div className="col hero-text">
                            <span>Hi, I'm</span>
                            <TypeWriterEffect
                                textStyle={{ fontFamily: 'Segoe UI' }}
                                startDelay={100}
                                cursorColor="black"
                                text="Nandhakumar"
                                typeSpeed={100}
                                hideCursorAfterText={true}
                            />
                            <h3>React frontend developer</h3>
                            <p>Front-end developer responsibilities include making sure page speed and graphics are optimal for user experience, checking that the website is visually ...</p>
                            <div className="hero-btn-container">
                                <a href="#home" className="btn primary-btn">Download CV</a>
                                <a href="#contact" className="btn secondary-btn">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero