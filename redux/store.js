import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./reducer/CategorySlice";
import PriceSlice from "./reducer/PriceSlice";
import SettingSlice from "./reducer/SettingSlice";
export const store = configureStore({
  reducer: {
    CategorySlice,
    SettingSlice,
    PriceSlice,
  },
});
