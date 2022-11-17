import React, { useState } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import BuyCartButton from "./BuyButton";
import "./homepage.css";
import Iphone from "./iphone";
import MenuButton from "./MenuButton";
import SearchButton from "./searchButton";
import Watch from "./watch";
import Mac from "./mac";
import apple from "./apple.js";
import Cart from "./cart";
import Ipad from "./ipad";

const Homepage = () => {
  const [menuButton, setMenuButton] = useState("");

  const changeMenuButton = (prop) => {
    setMenuButton(prop);
  };

  return (
    <div className="blank">
      <p className="menubutton">
        <MenuButton />
      </p>
      <div className="background">
        <div className="margins">
          <div className="menu">
            <span>
              <Link to="/">
                <svg
                  width="42"
                  height="50"
                  viewBox="0 0 42 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9437 0.0250219C30.8375 -0.0937281 27.0093 0.071897 23.6781 3.68752C20.3468 7.30002 20.8593 11.4438 20.9343 11.55C21.0093 11.6563 25.6843 11.8219 28.6687 7.61877C31.6531 3.41565 31.05 0.146897 30.9437 0.0250219ZM41.2999 36.6906C41.15 36.3906 34.0343 32.8344 34.6968 25.9969C35.3593 19.1563 39.9312 17.2813 40.0031 17.0781C40.075 16.875 38.1375 14.6094 36.0843 13.4625C34.5769 12.6539 32.9085 12.1907 31.2 12.1063C30.8624 12.0969 29.6906 11.8094 27.2812 12.4688C25.6937 12.9031 22.1156 14.3094 21.1312 14.3656C20.1437 14.4219 17.2062 12.7344 14.0468 12.2875C12.025 11.8969 9.8812 12.6969 8.34683 13.3125C6.81558 13.925 3.90308 15.6688 1.86558 20.3031C-0.171924 24.9344 0.893701 32.2719 1.6562 34.5531C2.4187 36.8313 3.60933 40.5656 5.63433 43.2906C7.43433 46.3656 9.82183 48.5 10.8187 49.225C11.8156 49.95 14.6281 50.4313 16.5781 49.4344C18.1468 48.4719 20.9781 47.9188 22.0968 47.9594C23.2125 48 25.4125 48.4406 27.6656 49.6438C29.45 50.2594 31.1374 50.0031 32.8281 49.3156C34.5187 48.625 36.9656 46.0063 39.8218 40.6969C40.9062 38.2281 41.4 36.8938 41.2999 36.6906Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </span>
            <div className="Topbar">
              <Link to="/Mac">
                <div className="items">
                  <button className="buttontype">Mac</button>
                </div>
              </Link>
              <div className="items">
                <Link to="/iPhone">
                  <button className="buttontype">iPhone</button>
                </Link>
              </div>
              <Link to="/iPad">
                <div className="items">
                  <button className="buttontype">iPad</button>
                </div>
              </Link>
              <div className="items">
                <Link to="/iWatch">
                  <button
                    className="buttontype"
                    onClick={() => setMenuButton("iwatch")}
                  >
                    iWatch
                  </button>
                </Link>
              </div>
              <div className="items">
                <button className="buttontype">Support</button>
              </div>
            </div>
            <SearchButton />
            <BuyCartButton />
          </div>

          <Switch>
            <Route path="/iWatch" component={Watch} />
            <Route path="/iPhone" component={Iphone} />
            <Route path="/iPad" component={Ipad} />
            <Route path="/Mac" component={Mac} />
            <Route path="/Cart" component={Cart} />
            <Route path="/" component={apple} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
