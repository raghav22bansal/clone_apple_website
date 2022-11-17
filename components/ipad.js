import React from "react";
import "./ipad.css";
import ipadpage from "../resources/ipadpage.PNG";
import { findAllInRenderedTree } from "react-dom/test-utils";

function Ipad() {
  const ipadData = [
    {
      id: 1,
      name: "iPad Air",
      img: ipadpage,
    },
  ];

  return (
    <div className="back">
      {ipadData.map((id) => (
        <div>
          {/* <div className="setText">Ipad Air</div> */}
          <span className="setText">{id.name}</span>
          <img className="setImage" src={id.img} alt="ipad" />
        </div>
      ))}
    </div>
  );
}

export default Ipad;
