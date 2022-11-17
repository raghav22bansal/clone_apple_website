import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Buyiphone13Pro,
  cartIphone13pro,
} from "../redux/iphone/iphone13proActions";
import { buyIphone13 } from "../redux/iphone/iphoneActions";
import "./cart.css";
import my13 from "../resources/13.PNG";
import my13pro from "../resources/13pro.PNG";
import { CartStudio } from "../redux/mac/studioAction";
import { CartMacPro } from "../redux/mac/macproActions";
import mystudio from "../resources/studio1.PNG";
import mymacpro from "../resources/macpro1.PNG";
import { CartIwatch } from "../redux/iwatch/iwatchActions";
import black from "../resources/black.png";
function Cart() {
  const numOfIphone13 = useSelector((state) => state.iphone.numOfIphone13);
  const numofIphone13pro = useSelector(
    (state) => state.iphone.numofIphone13pro
  );
  const numOfMacPro = useSelector((state) => state.mac.numOfMacPro);
  const numOfStudio = useSelector((state) => state.mac.numOfStudio);
  const numOfIwatch = useSelector((state) => state.iwatch.numOfIwatch);
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      img: my13,
      name: "iPhone 13",
      cost: numOfIphone13 * 69900,
      value: numOfIphone13,
      func: buyIphone13,
    },
    {
      id: 2,
      img: my13pro,
      name: "iPhone 13 Pro",
      cost: numofIphone13pro * 119900,
      value: numofIphone13pro,
      func: cartIphone13pro,
    },
    {
      id: 3,
      img: mystudio,
      name: "Mac Studio",
      cost: numOfStudio * 189900,
      func: CartStudio,
      value: numOfStudio,
    },
    {
      id: 4,
      img: mymacpro,
      name: "MacBook Pro ",
      cost: numOfMacPro * 194900,
      value: numOfMacPro,
      func: CartMacPro,
    },
    {
      id: 5,
      img: black,
      name: "Iwatch ",
      cost: numOfIwatch * 41900,
      value: numOfIwatch,
      func: CartIwatch,
    },
  ];

  return (
    <div className="cartdetails">
      <h1 className="font">
        Your bag total is Rs.{" "}
        {numOfIphone13 * 69900 +
          numofIphone13pro * 119900 +
          numOfStudio * 189900 +
          numOfMacPro * 194900 +
          numOfIwatch * 41900}
        .
      </h1>
      <button className="checkout">Check out</button>
      <hr />
      <div className="bagflex">
        {data.map((id) =>
          id.value !== 0 ? (
            <div className="cartitems">
              <img src={id.img} alt="iphone 13" className="align" />
              <span className="styling">{id.name}</span>
              <input
                type="number"
                className="inputbox"
                value={id.value}
                onChange={(e) => dispatch(id.func(e.target.value))}
              ></input>
              <span className="price">Rs. {id.cost}</span>
              <button onClick={() => dispatch(id.func(0))} className="learn">
                Remove
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>

    // <div className="bagflex">
    //   {numOfIphone13 !== 0 ? (
    //     <div className="cartitems">
    //       <img src={data[0].img} alt="iphone 13" className="align" />
    //       <span className="styling">{data[0].name}</span>
    //       <input
    //         type="number"
    //         className="inputbox"
    //         value={numOfIphone13}
    //         onChange={(e) => dispatch(buyIphone13(e.target.value))}
    //       ></input>
    //       <span className="price">Rs. {data[0].cost}</span>
    //       <button onClick={() => dispatch(buyIphone13(0))} className="learn">
    //         Remove
    //       </button>
    //     </div>
    //   ) : null}
    //   {numofIphone13pro !== 0 ? (
    //     <div className="cartitems">
    //       <img src={my13pro} alt="iphone 13 Pro" className="align" />
    //       <span className="styling"> iPhone 13 Pro</span>
    //       <input
    //         type="number"
    //         className="inputbox"
    //         value={numofIphone13pro}
    //         onChange={(e) => dispatch(cartIphone13pro(e.target.value))}
    //       ></input>
    //       <span className="price">Rs. {numofIphone13pro * 119900}</span>
    //       <button
    //         className="learn"
    //         onClick={() => dispatch(cartIphone13pro(0))}
    //       >
    //         Remove
    //       </button>
    //     </div>
    //   ) : null}
    //   {numOfStudio !== 0 ? (
    //     <div className="cartitems">
    //       <img src={mystudio} alt="Mac Studio" className="align" />
    //       <span className="styling">Mac Studio </span>
    //       <input
    //         type="number"
    //         className="inputbox"
    //         value={numOfStudio}
    //         onChange={(e) => dispatch(CartStudio(e.target.value))}
    //       ></input>
    //       <span className="price">Rs. {numOfStudio * 189900}</span>
    //       <button className="learn" onClick={() => dispatch(CartStudio(0))}>
    //         Remove
    //       </button>
    //     </div>
    //   ) : null}
    //   {numOfMacPro !== 0 ? (
    //     <div className="cartitems">
    //       <img src={mymacpro} alt="Mac Pro" className="align" />
    //       <span className="styling">Mac Pro </span>
    //       <input
    //         type="number"
    //         className="inputbox"
    //         value={numOfMacPro}
    //         onChange={(e) => dispatch(CartMacPro(e.target.value))}
    //       ></input>
    //       <span className="price">Rs. {numOfMacPro * 194900}</span>
    //       <button className="learn" onClick={() => dispatch(CartMacPro(0))}>
    //         Remove
    //       </button>
    //     </div>
    //   ) : null}
    //   {numOfIwatch !== 0 ? (
    //     <div className="cartitems">
    //       <img src={black} alt="iWatch" className="align" />
    //       <span className="styling"> iWatch </span>
    //       <input
    //         type="number"
    //         className="inputbox"
    //         value={numOfIwatch}
    //         onChange={(e) => dispatch(CartIwatch(e.target.value))}
    //       ></input>
    //       <span className="price">Rs. {numOfIwatch * 41900}</span>
    //       <button className="learn" onClick={() => dispatch(CartIwatch(0))}>
    //         Remove
    //       </button>
    //     </div>
    //   ) : null}
  );
}

export default Cart;
