import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cc408e25-74f6-4b15-af18-c87f29e8bf0c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

 
    return (

    
        <div id="contacts" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I’m excited to start my career in frontend development and contribute to impactful projects. If you’re looking for a passionate developer eager to learn and grow, let’s connect!</p>
                    <div className="contactdetails">
                        <div className="contact-detail">
                        <IoIosMail /><p>boddusrija11@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <FaLinkedin /><p>Linklidin</p>
                        </div>
                        <div className="contact-detail">
                        <FaGithub /><p>Github</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=""> Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email"/>
                    <label htmlFor="" >Write your message here</label>
                    <textarea name="message" rows="4" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}
export default Contact