import React from "react";

export default function navigation(props) {
  return (
    <>
      <nav>
        <a href="https://andybrewer.github.io/mvp/">
          <img alt="Logo" src={props.src} height="70" />
        </a>
        <ul>
          <li>Home</li>
          <li>
            <a href="#favorit">Favorit</a>
          </li>
          <li>
            <a href="#faq">Terbaru</a>
          </li>
          <li>
            <a href="#faq">Trends</a>
          </li>
          <li>
            <a href="#faq">Juara</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
