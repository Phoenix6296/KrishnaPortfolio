import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sharenetic from "../../img/sharenetic.png";
import TicTacToe from "../../img/tictactoe.png";
import Netflix from "../../img/netflix.png";
import Blackjack from "../../img/blackjack.png";
import Coronavirus from "../../img/coronavirus.png";
import College from "../../img/college.png";
import PrivateChattingApp from "../../img/privatechattingapp.png";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://mitrajit.github.io/Sharenetic/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Sharenetic} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://phoenix6296.github.io/UDC_KrishnaBiswakarma_WebDevelopment/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={TicTacToe} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://netflix-clone6296.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Netflix} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://phoenix6296.github.io/Blackjack-Card-Game/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Blackjack} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://coronavirus-resource.web.app/hometreatment"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Coronavirus} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://phoenix6296.github.io/Haldia-Institute-of-Technology-Clone-Website/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={College} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://facebook-messenger-clone-9733.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={PrivateChattingApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
