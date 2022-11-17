import { BUY_IPHONE13, CART_IPHONE13 } from "./iphoneTypes";

export const buyIphone = (num = 1, cost = "69900") => {
  return {
    type: BUY_IPHONE13,
    payload: { num, cost },
  };
};

export const buyIphone13 = (num = 1, cost = "69900") => {
  return {
    type: CART_IPHONE13,
    payload: { num, cost },
  };
};
