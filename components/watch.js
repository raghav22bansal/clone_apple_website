import React, { useState } from "react";
import blue from "../resources/watch.png";
import black from "../resources/black.png";
import green from "../resources/green.png";
import pink from "../resources/pink.png";
import "./homepage.css";
import { useDispatch } from "react-redux";
import buyIwatch from "../redux/iwatch/iwatchActions";
function Watch() {
  const [watchColour, setWatchColour] = useState("black");
  const dispatch = useDispatch();
  const changeWatchColour = (color) => {
    setWatchColour(color);
  };

  return (
    <div>
      {" "}
      <div className="content">
        <div className="Maintext">
          <h1>The Perfect Moment </h1>
          <h2 style={{ fontWeight: 300 }}>Between Past And </h2>
          <h2 style={{ fontWeight: 300 }}>Future</h2>
          <h6>From Rs 41900.00*</h6>
          <button
            onClick={() => dispatch(buyIwatch(watchColour))}
            style={{ border: " 2px solid #1f1f1f", color: "#1f1f1f" }}
          >
            Buy Now
          </button>
        </div>
        <div className="Product">
          <img
            src={
              watchColour === "blue"
                ? blue
                : watchColour === "black"
                ? black
                : watchColour === "green"
                ? green
                : pink
            }
            alt="Logo"
            className="image"
          />
        </div>
        <div className="colourindicator">
          <button
            className="hovereffect"
            onClick={() => changeWatchColour("black")}
          >
            <div className="colours">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9.5" fill="#404354" stroke="white" />
              </svg>
            </div>
          </button>
          <button
            className="hovereffect"
            onClick={() => changeWatchColour("blue")}
          >
            <div className="colours">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* <g filter="url(#filter0_d_1_39)"> */}
                <circle cx="10" cy="10" r="9.5" fill="#ABC6D6" />
                <circle
                  cx="10"
                  cy="10"
                  r="9.5"
                  stroke="white"
                  // stroke-width="3"
                />
                {/* </g> */}
                <defs>
                  <filter
                    id="filter0_d_1_39"
                    x="0"
                    y="0"
                    width="38"
                    height="38"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_39"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_39"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </button>
          <button
            className="hovereffect"
            onClick={() => {
              changeWatchColour("pink");
            }}
          >
            <div className="colours">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9.5" fill="#F2CEC6" stroke="white" />
              </svg>
            </div>
          </button>
          <button
            className="hovereffect"
            onClick={() => changeWatchColour("green")}
          >
            <div className="colours">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9.5" fill="#58D7C4" stroke="white" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Watch;
