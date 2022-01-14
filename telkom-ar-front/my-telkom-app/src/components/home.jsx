import React from "react";
import samsaung21ultra from "../images/samasung_s21_ultra.png";
import "../style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faSimCard,
  faWifi,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import GalaxyTables from "../images/GalaxyTablets.png";
import GalaxyWatch from "../images/GalaxyWatch.png";
import iphone from "../images/iphone.png";
import Motorola from "../images/Motorola.png";
import samsungGalaxy from "../images/samsungGalaxy.png";
import Xiaomi from "../images/Xiaomi.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row main-card">
          <div className="col text">
            <h1 className="card-title">Samsung Galaxy S21 Ultra 5G</h1>
            <h5 className="card-text">
              Unlock your exclusive discount When taking up an additional plan
            </h5>
            <button type="button" className="btn btn-light btnDes">
              Login
            </button>
          </div>
          <div className="col imgDes">
            <img
              src={samsaung21ultra}
              className="col card-img"
              alt="Samsung 21 Ultra"
              height="400px"
              width="10px"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row oprRow text-2xl">
          <div class="col">
            <div className="row">
              <FontAwesomeIcon icon={faMobile} size="6x"></FontAwesomeIcon>
            </div>
            <div className="row">Pay Monthly phones</div>
          </div>
          <div className="col">
            <div className="row">
              <FontAwesomeIcon icon={faSimCard} size="6x"></FontAwesomeIcon>
            </div>
            <div className="row">Sim only deals</div>
          </div>
          <div className="col">
            <div className="row">
              <FontAwesomeIcon icon={faWifi} size="6x"></FontAwesomeIcon>
            </div>
            <div className="row">Home Broadband</div>
          </div>
          <div className="col">
            <div className="row">
              <FontAwesomeIcon icon={faMoneyBill} size="6x"></FontAwesomeIcon>
            </div>
            <div className="row">Top UP</div>
          </div>
        </div>
      </div>

      <div className="row cardDes">
        <h2 className="card-title">Now Trending</h2>
        <div className="col">
          <div className="card cardBox">
            <img src={iphone} className="card-img-top" alt="iphone" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Apple iPhone</h5>
          </div>
        </div>
        <div className="col">
          <div className="card cardBox">
            <img src={Xiaomi} className="card-img-top" alt="Xiaomi" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Xiaomi</h5>
          </div>
        </div>

        <div className="col">
          <div className="card cardBox">
            <img
              src={samsungGalaxy}
              className="card-img-top"
              alt="samsungGalaxy"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Samsung Galaxy</h5>
          </div>
        </div>
        <div className="col">
          <div className="card cardBox">
            <img src={GalaxyWatch} className="card-img-top" alt="GalaxyWatch" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Galaxy Watch</h5>
          </div>
        </div>
        <div className="col">
          <div className="card cardBox">
            <img
              src={GalaxyTables}
              className="card-img-top"
              alt="Galaxy Tables"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Galaxy Tablets</h5>
          </div>
        </div>
        <div className="col">
          <div className="card cardBox">
            <img src={Motorola} className="card-img-top" alt="Motorola" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Motorola</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
