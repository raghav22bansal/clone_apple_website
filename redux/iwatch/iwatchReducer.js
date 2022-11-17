import { BUY_IWATCH, CART_IWATCH } from "./iwatchTypes";

const intialState = {
  numOfIwatch: 0,
};

const IwatchReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_IWATCH:
      return {
        ...state,
        numOfIwatch: state.numOfIwatch + action.payload.num,
      };
    case CART_IWATCH:
      return {
        ...state,
        numOfIwatch: action.payload.num,
      };

    default:
      return state;
  }
};

export default IwatchReducer;
