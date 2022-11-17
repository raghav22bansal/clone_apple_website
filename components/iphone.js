import React from "react";
import iphone from "../resources/iphone.PNG";
import "./iphone.css";
import i13 from "../resources/i13.PNG";
import { useDispatch, useSelector } from "react-redux";
import { buyIphone } from "../redux/iphone/iphoneActions";
import Buyiphone13Pro from "../redux/iphone/iphone13proActions";
function Iphone() {
  const numOfIphone13 = useSelector((state) => state.iphone.numOfIphone13);
  const dispatch = useDispatch();

  const iphoneData = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      title: "Oh. So. Pro. ",
      price: "From Rs119900.00* before trade-in",
      img: iphone,
      func: Buyiphone13Pro(),
    },
    {
      id: 2,
      name: "iPhone 13",
      title: "Your new superpower. ",
      price: "From Rs69900.00* before trade-in",
      img: i13,
      func: buyIphone(),
    },
  ];

  return (
    <div className="design">
      {iphoneData.map((id) => (
        <div>
          <h2 className="pro">{id.name}</h2>
          <h1 className="promax">{id.title}</h1>
          <h4>{id.price}</h4>
          <button onClick={() => dispatch(id.func)} className="buyButton">
            Buy
          </button>
          <button className="learn">Learn more &gt;</button>
          <img src={id.img} alt={id.name} className="imagealign" />
          <div
            style={{
              backgroundColor: "grey",
              height: "8px",
              marginRight: "2em",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Iphone;
