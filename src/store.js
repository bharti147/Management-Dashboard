import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './features/dashboard/dashboardSlice'

const store = configureStore({
   reducer:{
    dashboard : dashboardReducer,
   }
});

export default store;