import { createSlice } from "@reduxjs/toolkit";



export const homeSlice = createSlice({
  name: "home",
  initialState:{
        url :{},
        zoneres:{}
  },
  reducers: {
    getApiConfiguration:(state,action)=>{
        state.url = action.payload
    },
    getZoneRes:(state,action)=>{
        state.zoneres = action.payload

    }
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration,getZoneRes } = homeSlice.actions;

export default homeSlice.reducer;
