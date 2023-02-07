import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sharenetic from "../../img/sharenetic.png";
import TicTacToe from "../../img/tictactoe.png";
import Coronavirus from "../../img/coronavirus.png";
import SortingVisulaizer from "../../img/sortingvisualizer.png";
import "swiper/css";
import { themeContext } from "../../Context";

const data = [
  "https://mitrajit.github.io/Sharenetic/",
  "https://prosort.vercel.app/",
  "https://covid19resourcer.vercel.app/",
  "https://phoenix6296.github.io/Tic-Tac-Toe/",
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
                  item === "https://prosort.vercel.app/"
                    ? SortingVisulaizer
                    : item === "https://covid19resourcer.vercel.app/"
                    ? Coronavirus
                    : item === "https://mitrajit.github.io/Sharenetic/"
                    ? Sharenetic
                    : item ===
                      "https://phoenix6296.github.io/Tic-Tac-Toe/"
                    ? TicTacToe
                    : null
                }
                alt="projects"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
