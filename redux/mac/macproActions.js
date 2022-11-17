import React from "react";
import { BUY_MACPRO, CART_MACPRO } from "./macTypes";

function MacProActions(num = 1, cost = 194900) {
  return {
    type: BUY_MACPRO,
    payload: { num, cost },
  };
}

export const CartMacPro = (num = 1, cost = 194900) => {
  return {
    type: CART_MACPRO,
    payload: { num, cost },
  };
};

export default MacProActions;
