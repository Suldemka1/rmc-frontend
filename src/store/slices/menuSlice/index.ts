import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    OpenMenu: (state) => {
      state.isOpen = true
    },
    CloseMenu: (state) => {
      state.isOpen = false
    }
  }
})

export const {OpenMenu, CloseMenu} = menuSlice.actions
export default menuSlice.reducer