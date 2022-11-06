import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: true,
    surname: 'surname',
    name: 'name',
    patronymic: 'patronymic'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.isAuth = true
        }
    }
})

export const {signIn} = authSlice.actions
export default authSlice.reducer