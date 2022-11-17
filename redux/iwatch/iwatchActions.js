import { BUY_IWATCH, CART_IWATCH } from "./iwatchTypes";

const buyIwatch = (watchColor = "black", num = 1, cost = 41900) => {
  return {
    type: BUY_IWATCH,

    payload: { num, watchColor, cost },
  };
};

export const CartIwatch = (num = 1, watchColor = "black", cost = 41900) => {
  return {
    type: CART_IWATCH,
    payload: { num, watchColor, cost },
  };
};

export default buyIwatch;
