import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sharenetic from "../../img/sharenetic.png";
import TicTacToe from "../../img/tictactoe.png";
import Blackjack from "../../img/blackjack.png";
import Coronavirus from "../../img/coronavirus.png";
import "swiper/css";
import { themeContext } from "../../Context";

const data = [
  "https://covid19resourcer.vercel.app/",
  "https://mitrajit.github.io/Sharenetic/",
  "https://phoenix6296.github.io/UDC_KrishnaBiswakarma_WebDevelopment/",
  "https://phoenix6296.github.io/Blackjack-Card-Game/",
];

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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              href={item}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              <img
                src={
                  item === "https://covid19resourcer.vercel.app/"
                    ? Coronavirus
                    : item === "https://mitrajit.github.io/Sharenetic/"
                    ? Sharenetic
                    : item ===
                      "https://phoenix6296.github.io/UDC_KrishnaBiswakarma_WebDevelopment/"
                    ? TicTacToe
                    : Blackjack
                }
                alt="project"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
