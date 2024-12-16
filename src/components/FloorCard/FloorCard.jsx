import React from 'react'
import "./style.css"
const FloorCard = () => {
  return (
    <div>
      <main>
      <div class="main">
        <div class="main_conteiner">
          <div class="inConteiner">
            <a href="./first/indes.html">
              <div class="floor_bloks1">
                <h1>First floor</h1>
              </div>
            </a>
            <a href="./second/index.html">
              <div class="floor_bloks2">
                <h1>Second floor</h1>
              </div>
            </a>
          </div>
          <div class="inConteiner">
            <a href="./third/index.html">
              <div class="floor_bloks3">
                <h1>Third floor</h1>
              </div>
            </a>
            <a href="./fourth/index.html">
              <div class="floor_bloks4">
                <h1>Fourth floor</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="Ground_floor">
        <a href="#">
          <div class="about_us">
            `
            <h1>Ground floor</h1>
          </div>
        </a>
      </div>
    </main>
    </div>
  )
}

export default FloorCard;
