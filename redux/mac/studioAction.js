import React from "react";
import { BUY_STUDIO, CART_STUDIO } from "./macTypes";

const studioAction = (num = 1, cost = 189900) => {
  return {
    type: BUY_STUDIO,
    payload: { cost, num },
  };
};

export const CartStudio = (num = 1, cost = 189900) => {
  return {
    type: CART_STUDIO,
    payload: { num, cost },
  };
};

export default studioAction;
