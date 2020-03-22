import React from "react";
import Drawer from "../navigation/Drawer/Drawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const matches = useMediaQuery("(min-width:576px)");
  const {type} = props

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
          {type === 'secondary' 
            ? <NavLink to="/home" exact={false}>
                <button className="header-button">На главную</button>
              </NavLink> 
            : <>
              <Link to="logo" smooth={true} duration={400}>
                <button className="header-button">О клубе</button>
              </Link>
              <Link to="slider" offset={-150} smooth={true} duration={500}>
                <button className="header-button">Виды единоборств</button>
              </Link>
              <Link to="MainTimeTable" smooth={true} duration={400}>
                <button className="header-button">Рассписание</button>
              </Link>
              </>
            }
            <a href={"https://vk.com/market-156067851"}>
              <button className="header-button">Цены</button>
            </a>
            <a href={"https://vk.com/market-156067851"}>
              <button className="header-button">Магазин</button>
            </a>
            <NavLink to="/contacts" exact={false}>
              <button className="header-button">Контакты</button>
            </NavLink>
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
