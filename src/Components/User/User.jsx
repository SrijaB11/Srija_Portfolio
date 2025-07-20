import React from 'react'
import './User.css'
const User = () => {
    return(
        <div  id="home" className="user">
            <img  className="profile-img" src="https://res.cloudinary.com/daqtrti8f/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1739591659/user%20img.jpg" alt="Profile-img"/>
           
            <h1><span>I'm Srija Boddu,</span>An Aspiring Frontend Web Developer</h1>
            <p>Looking for a job</p>
            <div className="user-action">
                <div className="user-connect"><a href="#contacts">
                Connect With Me</a></div>
                <div className="user-resume">
                 <a href="/Srija_b.pdf" target="_blank" rel="noopener noreferrer">
        View My Resume
      </a></div>
            </div>
            
            
        </div>
    )
}
export default User