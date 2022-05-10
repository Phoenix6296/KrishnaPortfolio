import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Mitrajit from "../../img/mitrajit.png";
import Kushankur from "../../img/kushankur.jpeg";
import Sudeep from "../../img/sudeep.jpeg";

const Testimonials = () => {
  const clients = [
    {
      img: Mitrajit,
      name: "Mitrajit Chandra Chandra",
      review:
        "Krishna's commitment to his work is evident in the consistent high quality of his work. His ability to think deep gave us meaningful insight in unthought fields. He is a team player that's a pleasure to work with.",
    },
    {
      img: Kushankur,
      name: "Kushankur Das",
      review:
        "Had a great time working  with Krishna Biswakarma on a same project. Got to learn great new skills. I must say he is very knowledgeable and helpful and got good leadership skills. Was really a pleasure working with such a teamate.",
    },
    {
      img: Sudeep,
      name: "Sudeep Deyondi",
      review:
        "He has successfully undertaken and completed multiple projects and contributed significantly to success. His dedication to the team is quiet impressive.",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Some of the&nbsp;</span>
        <span>Testimonials&nbsp;</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.name}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
