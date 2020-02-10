import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavButtons() {
  return (
    <div className="MainNavButtons">
      <button className="btn">Групповые тренировки</button>
      <NavLink to="/individual-trainings" exact={false} aria-current="page">
        <button className="btn">Персональные тренировки</button>
      </NavLink>
      <NavLink to="/hall-rental" exact={false} aria-current="page">
        <button className="btn">Аренда зала</button>
      </NavLink>
    </div>
  );
}
