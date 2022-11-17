import React from "react";
import { combineReducers } from "redux";
import IphoneReducer from "./iphone/iphoneReducer";
import macReducer from "./mac/macReducer";
import IwatchReducer from "./iwatch/iwatchReducer";

const rootReducer = combineReducers({
  mac: macReducer,
  iphone: IphoneReducer,
  iwatch: IwatchReducer,
});

export default rootReducer;
