import React from "react";

export default function navigation(props) {
  return (
    <>
      <nav>
        <a href="#">
          <img alt="Logo" src={props.src} height="70" />
        </a>
        <ul>
          <li>
            <a href="#engagement">Engagement</a>
          </li>
          <li>
            <a href="#social">Social</a>
          </li>
          <li>
            <a href="#analytics">Analytic</a>
          </li>
          <li>
            <a href="#insight">Insight</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
