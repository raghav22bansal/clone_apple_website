import {
  BUY_IPHONE13,
  BUY_IPHONE13PRO,
  CART_IPHONE13,
  CART_IPHONE13PRO,
} from "./iphoneTypes";

const initialState = {
  numOfIphone13: 0,
  numofIphone13pro: 0,
  totalcost: 0,
};

const IphoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_IPHONE13:
      return {
        ...state,
        numOfIphone13:
          parseInt(state.numOfIphone13) + parseInt(action.payload.num),
        totalcost: parseInt(state.totalcost) + parseInt(action.payload.cost),
      };
    case BUY_IPHONE13PRO:
      return {
        ...state,
        numofIphone13pro: state.numofIphone13pro + action.payload.num,
        totalcost: parseInt(state.totalcost) + parseInt(action.payload.cost),
      };
    case CART_IPHONE13:
      return {
        ...state,
        numOfIphone13: parseInt(action.payload.num),
        totalcost: parseInt(state.totalcost) + parseInt(action.payload.cost),
      };
    case CART_IPHONE13PRO:
      return {
        ...state,
        numofIphone13pro: parseInt(action.payload.num),
        totalcost: parseInt(state.totalcost) + parseInt(action.payload.cost),
      };
    default:
      return state;
  }
};

export default IphoneReducer;
