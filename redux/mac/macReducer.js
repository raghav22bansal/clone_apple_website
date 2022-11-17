import React from "react";

import { BUY_MACPRO, BUY_STUDIO, CART_MACPRO, CART_STUDIO } from "./macTypes";

const initialState = {
  numOfStudio: 0,
  numOfMacPro: 0,
};

function macReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MACPRO:
      return {
        ...state,
        numOfMacPro: state.numOfMacPro + action.payload.num,
      };
    case BUY_STUDIO:
      return {
        ...state,
        numOfStudio: state.numOfStudio + action.payload.num,
      };
    case CART_MACPRO:
      return {
        ...state,
        numOfMacPro: action.payload.num,
      };

    case CART_STUDIO:
      return {
        ...state,
        numOfStudio: action.payload.num,
      };
    default:
      return state;
  }
}

export default macReducer;
