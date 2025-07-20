import React from 'react'
import './About.css'


const About = () => {
    return (
        <div id="about" className="about-me">
            <div className="about-title">
                <h1>About me</h1>

            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src="https://res.cloudinary.com/daqtrti8f/image/upload/v1739591659/user%20img.jpg" className="profile-image" alt="profile-img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I’m Srija Boddu, a frontend developer with a strong passion for creating responsive and user-friendly web applications. With a background in Electronics and Communication Engineering, I transitioned into IT to follow my interest in technology. I specialize in HTML, CSS, JavaScript, and React, and enjoy turning ideas into clean, functional designs. I’m eager to grow as a developer and contribute to impactful projects.

</p>

                    </div>
                    {/* <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "60%" }} />

                        </div>
                        <div className="about-skill">
                            <p>Javascript</p><hr style={{ width: "58%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Reactjs</p><hr style={{ width: "53%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p><hr style={{ width: "65%" }} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default About