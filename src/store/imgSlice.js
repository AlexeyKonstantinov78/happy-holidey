import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchImg = createAsyncThunk(
  'text/fetchImg',  
  async (holiday) => {
    const res = await fetch(`${URI_API}image/${holiday}`);
    const data = await res.json();
    return data;
  }
);

export const fetchImgId = createAsyncThunk(
  'text/fetchImgId',  
  async (idImg) => {
    const res = await fetch(`${URI_API}image/${idImg}`);
    const data = await res.json();
    return data;
  }
);

const imgSlice = createSlice({
  name: 'image',
  initialState: {
    urlImg: '',
    idImg:'',
    loading: ''    
  },
  reducers: {},
  extraReducers: {
    [fetchImg.pending]: state => {
      state.loading = 'loading';     
    },
    [fetchImg.fulfilled]: (state, action) => {
      state.loading = 'succes';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImg.rejected]: state => {
      state.loading = 'failed';
      state.urlImg = '';
      state.idImg = '';
    },
    [fetchImgId.pending]: state => {
      state.loading = 'loading';     
    },
    [fetchImgId.fulfilled]: (state, action) => {
      state.loading = 'succes';
      state.urlImg = action.payload.urlImg;
      state.idImg = action.payload.idImg;
    },
    [fetchImgId.rejected]: state => {
      state.loading = 'failed';
      state.urlImg = '';
      state.idImg = '';
    },
  },
});

export default imgSlice.reducer;