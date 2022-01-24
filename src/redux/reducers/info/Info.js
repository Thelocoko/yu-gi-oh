import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const cardSliceInfo = createSlice({
  name: "cardsInfo",
  initialState: {
    list: [],
  },
  reducers: {
    setCardInfo: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCardInfo } = cardSliceInfo.actions;

export default cardSliceInfo.reducer;

export const fetchInfo = (url) => (dispatch) => {
  axios
    .get(url)
    .then((response) => {
      dispatch(setCardInfo(response.data.data));
    })
    .catch((error) => console.log(error));
};
