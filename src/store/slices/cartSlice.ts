import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, CartItem } from '../../types';

// Define the initial state for the cart
interface CartState {
    items: CartItem[];
    total: number;
}

const initialState: CartState = {
    items: [],
    total: 0
};

// Create a slice for the cart with reducers to handle actions
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add a product to the cart
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existingItem = state.items.find(item => item.product.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ product, quantity: 1 });
            }
            state.total = calculateTotal(state.items);
        },
        // Remove a product from the cart
        removeFromCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.product.id !== productId);
            state.total = calculateTotal(state.items);
        },
        // Update the quantity of a product in the cart
        updateQuantity: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find(item => item.product.id === productId);

            if (item) {
                item.quantity = quantity;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(item => item.product.id !== productId);
                }
            }
            state.total = calculateTotal(state.items);
        },
        // Clear all items from the cart
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }
});

// Helper function to calculate the total price of items in the cart
const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
};

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;