import React from "react";
import "../reset.css";
import "../styles/Contact.css";

import {
  Instagram,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

function Contact() {
  return (
    <div>
      <section id="contact" className="contact-section">
        <div className="container-xl">
          <div className="contact-info-cont">
            <div className="contact-info">
              <div className="section_title">
                <h2>Let's Connect</h2>
              </div>
              <p>
                Please fill out the form on this section to contact with me.
              </p>
              <ul className="contact-social">
                <li>
                  <a href="https://www.linkedin.com/in/n-nandhakumar-190301258/">
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/______nandha______kumar____/">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/home">
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
            <form
              className="contact-form"
              action="https://getform.io/f/9430a77f-afcf-40b7-a315-7f404423a7fd"
              method="POST"
            >
              <h3>Let's collaborate and create something together!</h3>
              <input
                type="text"
                id="name"
                className="input-control"
                placeholder="Your Name"
                name="name"
                required
              />
              <input
                type="text"
                id="email"
                className="input-control"
                placeholder="Your Email"
                name="email"
                required
              />
              <textarea
                className="input-control"
                placeholder="Message"
                name="message"
                required
              />
              <div className="form-btn">
                <button className="btn primary-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
