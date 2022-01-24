import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const cardSlice = createSlice({
  header:'Access-Control-Allow-Origin: *',
  name: "cards",
  initialState: {
    list: [],
  },
  reducers: {
    setCardList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const {setCardList} = cardSlice.actions

export default cardSlice.reducer;

export const fetchAllCards = (url) => (dispatch) => {
  axios
    .get(url)
    .then((response) => {
        dispatch(setCardList(response.data.data));
    })
    .catch((error) => console.log(error));
};
