import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchText = createAsyncThunk(
  'text/fetchText',  
  async (holiday) => {
    const res = await fetch(`${URI_API}text/${holiday}`);
    const data = await res.json();
    return data;
  }
);

const testSlice = createSlice({
  name: 'test',
  initialState: {
    text: '',
    idText:'',
    loading: ''    
  },
  reducers: {},
  extraReducers: {
    [fetchText.pending]: state => {
      state.loading = 'loading';
      state.text = '';
      state.idText = '';
    },
    [fetchText.fulfilled]: (state, action) => {
      state.loading = 'succes';
      state.text = action.payload.text;
      state.idText = action.payload.idText;
    },
    [fetchText.rejected]: state => {
      state.loading = 'failed';
      state.text = '';
      state.idText = '';
    },
  },
});

export default testSlice.reducer;