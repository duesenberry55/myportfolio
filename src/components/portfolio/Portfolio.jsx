import React from "react";
import "./portfolio.css";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";
import img4 from "../../assets/project4.png";
import img5 from "../../assets/project5.png";
import img6 from "../../assets/project6.png";
import img7 from "../../assets/project7.png";
import img8 from "../../assets/project8.png";


export const Portfolio = () => {
  const portfolioContent = [
    {
      image : img1,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 1,
      title:'Project 1'
    },
    {
      image : img2,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 2,
      title:'Project 2'
    },
    {
      image : img3,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 4,
      title:'Project 3'
    },
    {
      image : img4,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 5,
      title:'Project 4'
    },
    {
      image : img5,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 6,
      title:'Project 5'
    },
      {
      image : img6,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 7,
      title:'Project 6'
    },
    {
      image : img7,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 8,
      title:'Project 7'
    },
    {
      image : img8,
      github: 'https://github.com',
      demo: 'https://linktr.ee/duesenberry55',
      id: 9,
      title:'Project 8'
    },
  ]
  return (
    <section id="portfolio">
      <h5>Recent Engagements</h5>
      <h2>More</h2>

      <div className="container portfolio__container">
      {
        portfolioContent.map((content, id) =>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={content.image} alt=" one" className="portImage" />
              </div>
              <h3> {content.title} </h3>
              <div className="portfolio__item__cta">
                <a
                  href={content.github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Access
                </a>
                <a
                  href={content.demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        }
        
        )
      }
      </div>
    </section>
  );
};
export default Portfolio;
