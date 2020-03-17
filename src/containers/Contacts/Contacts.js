import React from "react";
import Header from "../../components/header/Header";

function Contacts() {
  return (
    <div>
      <Header />
      <div className="infoWrapper">
        <h2>Контактные данные</h2><br/>
            {/* <a className="phone" href="tel: +79221293111"> */}
              {/* <div className="icone icone_phone"></div> */}
              тел. +7 999-565-58-00<br/><br/>
            {/* </a> */}
            {/* <div className="location">
              <div className="icone icone_location"></div>Екатеринбург, */}
              Адрес: Екатеринбург, Крестинского 59/1
            {/* </div> */}
            {/* <div className="links"> */}
              {/* <a
                href="https://www.instagram.com/fathers_ekb/"
              >Instagramm</a>
              <a
                // className="icone icone_vk"
                href="https://vk.com/fathers_ekb"
              ></a> */}
            {/* </div> */}
      </div>
    </div>
  );
}
export default Contacts;
