import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./components/QuoteGenerator/quoteSlice";

export const store = configureStore({
  reducer: {
    randomQuote: quoteSlice
  }
});
