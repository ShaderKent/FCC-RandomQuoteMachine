import { createSlice } from "@reduxjs/toolkit";
import quoteData from "./quoteData.js";

let QuoteState = {};

const initialState = (QuoteState = {
  quote: quoteData[Math.floor(Math.random() * quoteData.length)].quote,
  author: quoteData[Math.floor(Math.random() * quoteData.length)].author,
  color: "blue"
});

const quoteSlice = createSlice({
  name: "randomQuote",
  initialState,
  reducers: {
    getRandomQuote: state => {
      state.quote =
        quoteData[Math.floor(Math.random() * quoteData.length)].quote;
      state.author =
        quoteData[Math.floor(Math.random() * quoteData.length)].author;
    },
    getRandomColor: state => {
      const red = Math.floor(Math.random() * 128);
      const green = Math.floor(Math.random() * 128);
      const blue = Math.floor(Math.random() * 128);
      state.color = `rgb(${red}, ${green}, ${blue})`;
    }
  }
});

export const { getRandomQuote, getRandomColor } = quoteSlice.actions;
export default quoteSlice.reducer;
