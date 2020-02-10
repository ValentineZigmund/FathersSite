import React from 'react';
import Drawer from "../navigation/Drawer/Drawer";

export default function Header() {
    return (
    <header className="main-header">
        <a className="phone" href="tel: +79221293111"><div className="icone icone_phone"></div>+7 999-565-58-00</a>
        <div className="time"><div className="icone icone_time"></div>ПН-ВС 7:00-23:00</div>
        <div className="location"><div className="icone icone_location"></div>Екатеринбург, Крестинского 59/1</div>
        <div className="links">
            <a className="icone icone_inst" href="https://www.instagram.com/fathers_ekb/"></a>
            <a className="icone icone_vk" href="https://vk.com/fathers_ekb"></a>   
        </div>
        <Drawer />    
    </header>
    );
  }