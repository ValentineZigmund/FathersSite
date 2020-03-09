import React from "react";
import Drawer from "../navigation/Drawer/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-scroll";

export default function Header() {
  const matches = useMediaQuery("(min-width:576px)");

  return (
    <>
      {matches === true ? (
        <div>
          <header className="main-header">
            <a className="phone" href="tel: +79221293111">
              <div className="icone icone_phone"></div>
              +7 999-565-58-00
            </a>
            <div className="time">
              <div className="icone icone_time"></div>
              ПН-ВС 7:00-23:00
            </div>
            <div className="location">
              <div className="icone icone_location"></div>Екатеринбург,
              Крестинского 59/1
            </div>
            <div className="links">
              <a
                className="icone icone_inst"
                href="https://www.instagram.com/fathers_ekb/"
              ></a>
              <a
                className="icone icone_vk"
                href="https://vk.com/fathers_ekb"
              ></a>
            </div>
          </header>
          <header className="main-header main-header_web">
            <Link to="faq" smooth={true} duration={400}>
              <button className="header-button">О клубе</button>
            </Link>
            <Link to="slider" offset={-150} smooth={true} duration={500}>
              <button className="header-button">Виды единоборств</button>
            </Link>
            <Link to="MainTimeTable" smooth={true} duration={400}>
              <button className="header-button">Рассписание</button>
            </Link>
            <Link>
              <button className="header-button">Цены</button>
            </Link>
            <Link>
              <button className="header-button">Магазин</button>
            </Link>
            <Link>
              <button className="header-button">Контакты</button>
            </Link>
          </header>
        </div>
      ) : (
        <header className="main-header">
          <a className="phone" href="tel: +79221293111">
            <div className="icone icone_phone"></div>
            +7 999-565-58-00
          </a>
          <div className="time">
            <div className="icone icone_time"></div>
            ПН-ВС 7:00-23:00
          </div>
          <div className="location">
            <div className="icone icone_location"></div>Екатеринбург,
            Крестинского 59/1
          </div>
          <div className="links">
            <a
              className="icone icone_inst"
              href="https://www.instagram.com/fathers_ekb/"
            ></a>
            <a className="icone icone_vk" href="https://vk.com/fathers_ekb"></a>
          </div>
          <Drawer />
        </header>
      )}
    </>
  );
}
