import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const FloorCard = () => {
  return (
    <div>
      <main>
        <section className="main">
          <div className="main_conteiner">
            <div className="inConteiner">
              <article className="floor_bloks1">
                <Link to="/first">
                  <h2>First floor</h2>
                </Link>
              </article>

              <article className="floor_bloks2">
                <Link to="/second">
                  <h2>Second floor</h2>
                </Link>
              </article>
            </div>

            <div className="inConteiner">
              <article className="floor_bloks3">
                <Link to="/third">
                  <h2>Third floor</h2>
                </Link>
              </article>

              <article className="floor_bloks4">
                <Link to="/fourth">
                  <h2>Fourth floor</h2>
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="Ground_floor">
          <article className="about_us">
            <Link to="/ground">
              <h2>Ground floor</h2>
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
};

export default FloorCard;

