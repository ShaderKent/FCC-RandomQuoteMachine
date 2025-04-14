import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./Components/QuoteGenerator/quoteSlice";

export const store = configureStore({
  reducer: {
    randomQuote: quoteSlice
  }
});
