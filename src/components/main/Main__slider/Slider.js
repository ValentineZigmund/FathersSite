import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Images from './Images';
import './slider.scss';

export default function Slider() {
  const matches = useMediaQuery('(min-width:576px)');
  return (
    <div className='slider'>
    {matches === true ? <Images /> : 
    <Carousel>
      <Carousel.Item>
        <NavLink to={"/brazil-jiu-jitsu"} exact={false}>
          <img
            className="d-block w-100 transition-on-hover"
            src={require("../../../images/jiujitsu.jpg")}
            alt="Бразильское джиу-джитсу"
          />
        </NavLink>
        <Carousel.Caption>
          <h3>Бразильское джиу-джитсу</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={"/boxing"} exact={false}>
          <img
            className="d-block w-100 transition-on-hover"
            src={require("../../../images/boxing.jpg")}
            alt="Third slide"
          />
        </NavLink>
        <Carousel.Caption>
          <h3>Бокс</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={"/mma"} exact={false}>
          <img
            className="d-block w-100 transition-on-hover"
            src={require("../../../images/mma.jpg")}
            alt="Third slide"
          />
        </NavLink>
        <Carousel.Caption>
          <h3>ММА</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={"/muay-thai"} exact={false}>
          <img
            className="d-block w-100 transition-on-hover"
            src={require("../../../images/grappling.jpg")}
            alt="Third slide"
          />
        </NavLink>
        <Carousel.Caption>
          <h3>Тайский бокс</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={"/grappling"} exact={false}>
          <img
            className="d-block w-100 transition-on-hover"
            src={require("../../../images/mauthai.jpg")}
            alt="Third slide"
          />
        </NavLink>
        <Carousel.Caption>
          <h3>Грэпплинг</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    }
    </div>
  );
}
