import { createSlice } from '@reduxjs/toolkit';

const createProfileSlice = createSlice({
  name: 'createProfile',
  initialState:{
    personal: true,
    vehicle: false,
    CNIC: false,
    personalDoc: false,
  },
  reducers: {
    setPersonalMenu(state, action) {
        state.personal = action.payload;
      },
      setVehicleMenu(state, action) {
        state.vehicle = action.payload;
      },
      setCNICMenu(state, action) {
        state.CNIC = action.payload;
      },
      setPersonalDocMenu(state, action) {
        state.personalDoc = action.payload;
      },
  },
});

export const { setPersonalMenu,setVehicleMenu,setCNICMenu,setPersonalDocMenu} = createProfileSlice.actions;
export default createProfileSlice.reducer;