import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Mitrajit from "../../Assets/Images/mitrajit_pic.webp";
import Kushankur from "../../Assets/Images/kushankur_pic.webp";
import Sudeep from "../../Assets/Images/sudeep_pic.webp";
import Abdul from "../../Assets/Images/abdul_pic.webp";

const Testimonials = () => {
  const clients = [
    {
      img: Abdul,
      name: "Abdul Ghani",
      designation: "Software Engineer @Volteo Maritime",
      review:
        "Krishna has outstanding work ethics, he is a quick learner and always thinks creatively. He actively contributed to the product. I was glad to have him in my team.",
    },
    {
      img: Sudeep,
      name: "Sudeep Deyondi",
      designation: "Software Engineer @DigitalBoxItIn",
      review:
        "He has successfully undertaken and completed multiple projects and contributed significantly to success. His dedication to the team is quiet impressive. He is a talented and highly motivated developer with can-do attitude.",
    },
    {
      img: Mitrajit,
      name: "Mitrajit Chandra Chandra",
      designation: "Backend Engineer @Listed Fans",
      review:
        "Krishna's commitment to his work is evident in the consistent high quality of his work. His ability to think deep gave us meaningful insight in unthought fields. He is a team player that's a pleasure to work with.",
    },
    {
      img: Kushankur,
      name: "Kushankur Das",
      designation: "Advance App Software Engineer @Accenture",
      review:
        "Had a great time working  with Krishna Biswakarma on a same project. Got to learn great new skills. I must say he is very knowledgeable and helpful and got good leadership skills. Was really a pleasure working with such a teamate.",
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
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.name}</span>
                <span>{client.designation}</span>
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
