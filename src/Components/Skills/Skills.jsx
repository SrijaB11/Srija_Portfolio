import React from 'react'
import './Skills.css'

const Skills = () => {
    return(
        <div id="skill" className="skills">
            <h1>Skills</h1>
          <div className="about-skills">
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
                            <p>SQL</p><hr className="hr-skill"/>
                        </div>
                    </div>
                    </div>
    )
}
export default Skills