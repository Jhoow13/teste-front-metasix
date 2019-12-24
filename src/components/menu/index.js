import React from "react";
import "./styles.css";

export default function Menu() {
  return (
    <>
      <section className="menu">
        <ul>
          <li>
            <button>home</button>
          </li>
          <li>
            <button className="active">faq</button>
          </li>
          <li>
            <button>locais</button>
          </li>
          <li>
            <button>categorias</button>
          </li>
        </ul>
      </section>
    </>
  );
}
