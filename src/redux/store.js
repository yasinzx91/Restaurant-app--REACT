import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";

export const store = configureStore({
    reducer:{
        restaurantSlice
    }
})

export default store