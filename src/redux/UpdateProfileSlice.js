import {createSlice} from '@reduxjs/toolkit';

const updateProfileSlice = createSlice({
  name: 'createProfile',
  initialState: {
    update_personal: true,
    update_vehicle: false,
    update_CNIC: false,
    update_personalDoc: false,
  },
  reducers: {
    setUpdatePersonalMenu(state, action) {
      state.update_personal = action.payload;
    },
    setUpdateVehicleMenu(state, action) {
      state.update_vehicle = action.payload;
    },
    setUpdateCNICMenu(state, action) {
      state.update_CNIC = action.payload;
    },
    setUpdatePersonalDocMenu(state, action) {
      state.update_personalDoc = action.payload;
    },
  },
});

export const {
  setUpdatePersonalMenu,
  setUpdateVehicleMenu,
  setUpdateCNICMenu,
  setUpdatePersonalDocMenu,
} = updateProfileSlice.actions;
export default updateProfileSlice.reducer;
