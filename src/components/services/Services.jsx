import React from 'react'
import {FaRegCheckCircle} from 'react-icons/fa'
import './services.css'



export const Services = () => {
  return (
    <section id="services">
      <h5>Services I Give Out</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <section className="service">
          <div className="service__head">
            <h3>Search Engine Optimization</h3>
          </div>
          <div className="service__list">
            <ul>
              <li>
                <p>
                <FaRegCheckCircle className="service__list__icon" /> Offsite high traffic SEO for your website
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Onsite high traffic SEO for your website
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Choosing of domain names perfect for SEO
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> XML file submission for you site to rank on first page of google, yahoo, bink, yandex etc
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <div className="service__list">
            <ul>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Building of elegant looking wordpress websites for your business in any niche
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Building and deployment of react.js app/websites
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Building of landing pages with 100% conversion rates
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="service">
          <div className="service__head">
            <h3>Social Media Marketting</h3>
          </div> 
          <div className="service__list">
            <ul>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Running of instagram, google, snapchat and facebook lead ads
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Telegram services(Adding up of telegram subscribers, post views and post reactions etc)
                </p>
              </li>
              <li>
                <p>
                  <FaRegCheckCircle className="service__list__icon" /> Facebook and Instagram services(Followers, Post Comments, Post likes etc.)
                </p>
              </li>
            </ul>
          </div>     
        </section>
      </div>
    </section>
  );
}
export default Services;