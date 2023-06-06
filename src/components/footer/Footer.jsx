import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { CgTwitter } from "react-icons/cg";

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="https://linktr.ee/duesenberry" target='_blank' rel="noopener noreferrer" className="footer__logo">
          Duesenberry Mbikang
        </a>

        <ul className="permalinks">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com/in/duesenberry55" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/duesenberry55" target="blank">
            <FaGithub />
          </a>
          <a href="https://linktr.ee/duesenberry" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/Duesenberry55" target="blank">
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>Copyright © 2023 Duesenberry | All Rights Reserved</h3>
        </div>
      </div>
    );
}

export default Footer
