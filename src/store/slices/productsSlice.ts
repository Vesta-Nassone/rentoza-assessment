import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductById } from '../../utils/api';
import { Product } from '../../types';

interface ProductsState {
    items: Product[];
    selectedProduct: Product | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    selectedProduct: null,
    status: 'idle',
    error: null
};

export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async () => {
        return await fetchAllProducts();
    }
);

export const fetchProduct = createAsyncThunk(
    'products/fetchById',
    async (id: number) => {
        return await fetchProductById(id);
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch products';
            })
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                state.status = 'succeeded';
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch product';
            });
    }
});

export default productsSlice.reducer;