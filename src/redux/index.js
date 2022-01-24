import { configureStore } from "@reduxjs/toolkit";
//reducers
import cards from "./reducers/cards";
import cardsInfo from "./reducers/info/Info";
export default configureStore({
  reducer: {
    cards,
    cardsInfo,
  },
});
