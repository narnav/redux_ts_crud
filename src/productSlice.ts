import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './app/store';
import { getDataFromServer, addProduct, delProduct, updProduct } from './productAPI';

export interface ProductState {
    // prodId:string;
    // prodDesc:string;
    // prodPrice:number;
    prodAr: any[],
    updateFlag: boolean
}
const initialState: ProductState = {
    prodAr: [],
    updateFlag: false
};

export const getDataAsync = createAsyncThunk(
    'product/getDataFromServer',
    async () => {
        const response = await getDataFromServer();
        return response.data;
    }
);
export const delProdAsync = createAsyncThunk(
    'product/delProduct',
    async (id: number) => {
        const response = await delProduct(id);
        return response.data;
    }
);
export const updProdAsync = createAsyncThunk(
    'product/updProduct',
    async (newProduct: any) => {
        const response = await updProduct(newProduct);
        return response.data;
    }
);
export const addProductAsync = createAsyncThunk(
    'product/addProduct',
    async (newProduct: any) => {

        const response = await addProduct(newProduct);
        return response.data;
    }
);
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataAsync.fulfilled, (state, action) => {
                state.prodAr = action.payload;
                console.log("async result" + action.payload)
            }).addCase(addProductAsync.fulfilled, (state, action) => {
                // state.prodAr = action.payload;
                console.log(state.updateFlag )
                state.updateFlag = !state.updateFlag 
                console.log("async result" + action.payload.desc)
            })
            .addCase(delProdAsync.fulfilled, (state, action) => {
                // state.prodAr = action.payload;
                state.updateFlag = !state.updateFlag 
                console.log("async result" + action.payload.desc)
            })
            .addCase(updProdAsync.fulfilled, (state, action) => {
                // state.prodAr = action.payload;
                state.updateFlag = !state.updateFlag 
                console.log("async result" + action.payload.desc)
            })

    },
});
export const { } = productSlice.actions;
export const selectProdAr = (state: RootState) => state.product.prodAr;
export const selectupdFlag = (state: RootState) => state.product.updateFlag;
export default productSlice.reducer;
