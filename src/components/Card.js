import React from "react";
import { NavLink } from "react-router-dom";

function Card({}) {
  return (
    <section className="page-contain">
      <NavLink to="timeline" className="data-card">
        <h3>17</h3>
        <h4>Total Discoveries to date: May 2022</h4>
        <span className="link-text">View Discoveries Timeline</span>
      </NavLink>
    </section>
  );
}

export default Card;
