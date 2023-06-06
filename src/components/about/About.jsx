import React from 'react'
import './about.css'
import moi from '../../assets/me1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Duesenberry" />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Years of Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Satisfied Clients</h5>
                <small>100+ world wide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5 Completed</small>
              </article>
            </div>
            <p>
              The name's Duesenberry, Computer Engineering Student At the faculty Of Engineering And Technology.
              Currently trying as much as possible to cope. I'm currently a wordpress developer and an aspiring full stack developer.
            </p>
            <a href="#contact" className="btn btn-primary">
              Lets Have a Word!
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
