import React from "react";
import { BUY_IPHONE13PRO, CART_IPHONE13PRO } from "./iphoneTypes";

function Buyiphone13Pro(num = 1, cost = 119900) {
  return {
    type: BUY_IPHONE13PRO,
    payload: { num, cost },
  };
}
export const cartIphone13pro = (num = 1, cost = "69900") => {
  return {
    type: CART_IPHONE13PRO,
    payload: { num, cost },
  };
};

export default Buyiphone13Pro;
