import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    map: true,
    list: false
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMap: state => {
            state.list = false
            state.map = true
        },
        setList: state => {
            state.map = false
            state.list = true
        }
    }
})

export const {setMap, setList} = mapSlice.actions
export default mapSlice.reducer
