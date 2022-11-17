import React from "react";
import macstudio from "../resources/studio.PNG";
import macbook from "../resources/macbook.PNG";
import studioAction from "../redux/mac/studioAction";
import { useDispatch, useSelector } from "react-redux";
import MacProActions from "../redux/mac/macproActions";

const Mac = () => {
  const numOfMacPro = useSelector((state) => state.mac.numOfMacPro);
  const dispatch = useDispatch();
  const macDetails = [
    {
      id: 1,
      name: "Mac Studio",
      title: "Empower station.",
      price: "From Rs189900.00*",
      func: studioAction(),
      img: macstudio,
    },
    {
      id: 2,
      name: "MacBook Pro",
      title: "Supercharged for pros",
      price: "From Rs 194900.00*",
      func: MacProActions(),
      img: macbook,
    },
  ];

  return (
    <div className="design">
      {macDetails.map((id) => (
        <div>
          <h2 className="pro">{id.name}</h2>
          <h1 className="promax">{id.title} </h1>
          <h4>{id.price}</h4>
          <button className="buyButton" onClick={() => dispatch(id.func)}>
            Buy
          </button>
          <button className="learn">Learn more &gt;</button>
          <img src={id.img} alt="mac studio" className="imagealign" />
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
};

export default Mac;
