import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchData,getDataFromServer } from './demoAPI';

export interface DemoState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  uName:string;
  uAge:number;
  prodAr:any[]
}


const initialState: DemoState = {
  value: 0,
  status: 'idle',
  uName: 'joe',
  uAge: 20,
  prodAr: []

};

// 2 the async method
export const getDataAsync = createAsyncThunk(
  'demo/fetchData',
  async (age: number) => {
    
    const response = await fetchData(age);
    return response.data; //4 we have result...
  }
);

export const getDataServerAsync = createAsyncThunk(
    'demo/getDataFromServer',
    async () => {
      const response = await getDataFromServer();
      return response.data; //4 we have result...
    }
  );

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    cngName: (state,action) => {
        console.log(action.payload)
        state.uName = action.payload;
      },
      cngNameAge: (state,action) => {
        console.log(action.payload.age)
        console.log(action.payload.newUserName)
        state.uName = action.payload.newUserName;
        state.uAge = action.payload.age;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state,action) => {
        console.log("async result" +action.payload )
        state.status = 'loading';
      }).addCase(getDataServerAsync.fulfilled, (state,action) => {
        console.table(action.payload )
        state.prodAr=action.payload
        state.status = 'loading';
      })
     
  },
});

export const { cngName,cngNameAge } = demoSlice.actions;
export const selectCount = (state: RootState) => state.demo.value;
export const selectUname = (state: RootState) => state.demo.uName;
export const selectProdAr = (state: RootState) => state.demo.prodAr;
export const selectUage = (state: RootState) => state.demo.uAge
export default demoSlice.reducer;
