import React from "react";
import "./testimonials.css";
import IMG from "../../assets/person6.png";
import AV1 from "../../assets/person1.png";
import AV2 from "../../assets/person2.png";
import AV3 from "../../assets/person3.png";
import AV4 from "../../assets/person4.png";
import AV5 from "../../assets/person5.png";
import AV6 from "../../assets/person7.png";
import AV7 from "../../assets/person8.png";
import AV8 from "../../assets/person9.png";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Your attention to detail and ability to understand my needs made the whole process of creating my website a breeze. We could not be happier with the result!",
      avatar: IMG,
      Cname: "Sedney Keron",
    },
    {
      id: 2,
      testimonial:
        "The website you created for my business is amazing! It is user-friendly and has helped us attract more customers. Thank you!",
      avatar: AV1,
      Cname: "Yung Terry",
    },
    {
      id: 3,
      testimonial:
        "We’ve received so many compliments on our new website! Thank you for helping us create an online presence that we’re proud of",
      avatar: AV2,
      Cname: "Emerencia",
    },
    {
      id: 4,
      testimonial:
        "Your expertise in web development has helped my business create a website that truly represents our brand. Thank you for your hard work!",
      avatar: AV3,
      Cname: "Geoïma",
    },
    {
      id: 5,
      testimonial:
        "Your expertise in keyword research and on-page optimization has helped my business create content that ranks higher on search engines and attracts more visitors. Thank you for your hard work!",
      avatar: AV4,
      Cname: "Puissance Kasper",
    },
    {
      id: 6,
      testimonial:
        "Your technical skills and understanding of search engine algorithms have helped my company improve our website’s search engine rankings and attract more organic traffic. We’re grateful for your work!",
      avatar: AV5,
      Cname: "Jesus McLouis",
    },
    {
      id: 7,
      testimonial:
        "My Company has seen a significant increase in our website’s visibility and search engine rankings since working with you. Your knowledge of SEO is impressive!",
      avatar: AV6,
      Cname: "Oben Romain",
    },
    {
      id: 8,
      testimonial:
        "My Health firm has seen a significant increase in our website’s visibility and search engine rankings since working with you. Your knowledge of SEO is impressive!",
      avatar: AV7,
      Cname: "Masango Vanessa",
    },
    {
      id: 9,
      testimonial:
        "Your attention to detail and ability to understand my needs made the whole process of creating my Consultation website a breeze. We could not be happier with the result!",
      avatar: AV8,
      Cname: "Georgie Boseme",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <table>
                <tbody>
                <tr>
                  <td>
                    <div className="client__avatar">
                      <img src={testi.avatar} alt="client avatar" />
                    </div>
                    <h4 className="client__name"> {testi.Cname} </h4>
                  </td>
                  <td align="left">
                    <small className="client__review"> {testi.testimonial} </small>
                  </td>
                </tr>
                </tbody>
              </table>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
