import React from "react";
import Slider from "./Main__slider/Slider";
import Faq from "./Main__faq/Faq";
import MainNavButtons from "./MainNavButtons/MainNavButtons";
import MainTimeTable from "./MainTimeTable/TimeTable";
import MainTrainers from "./MainTrainers/MainTrainers";
import oranzhevy from "./oranzhevy.png";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div className="top-section">
        <img src={oranzhevy} className="logo"></img>
        <div className='top-section__text'>
        <h1 className="club">Fathers</h1>
        <span>
          <b>
            это филиал легендарного клуба единоборств в Екатеринбурге, который
            создан для людей, желающих достигнуть высоких результатов в
            различных стилях боевых искусств. <span className="top-section__extra-info-list">В ходе своей активной деятельности
            мы стремимся развивать и популяризировать следующие виды спортивной
            борьбы:
            <ul>
              <li>Бокс</li>
              <li>Грэпплинг</li>
              <li>Муай-тай</li>
              <li>Самбо</li>
              <li>ММА (mixed martial arts) – смешанные боевые искусства</li>
            </ul></span>
            <NavLink to={"/about-us"} exact={false}>
              <br/><span style={{color: '#fcba00'}}>Узнать больше...</span>
            </NavLink>
          </b>
        </span>
        </div>
      </div>
      <Slider />
      <MainNavButtons />
      <MainTimeTable />
      <MainTrainers />
      <Faq />
    </div>
  );
}
