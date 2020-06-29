import { createSlice } from '@reduxjs/toolkit';

export const liveEditingSlice = createSlice({
    name: 'editing',
    initialState: {
        text: ""
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        updateText: (state, action) => {
            state.text = action.payload
        }
    }
});

export const { setText, updateText } = liveEditingSlice.actions;
export const selectText = state => state.editing.text;

export default liveEditingSlice.reducer;