import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clearCart } from '../../store/slices/cartSlice';
import CartItem from './CartItem';

const Cart: FC = () => {
    const dispatch = useAppDispatch();
    const { items, total } = useAppSelector(state => state.cart);

    if (items.length === 0) {
        return (
            <div className="text-center p-8">
                <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty</h2>
                <p className="text-gray-500 mt-2">Add some products to see them here!</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                <button type="button"
                    onClick={() => dispatch(clearCart())}
                    className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                    Clear Cart
                </button>
            </div>

            <div className="divide-y">
                {items.map(item => (
                    <CartItem key={item.product.id} item={item} />
                ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
                <div>
                    <span className="text-gray-600">Total Items:</span>
                    <span className="ml-2 font-medium">{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="text-xl font-bold text-indigo-700">
                    Total: ${total.toFixed(2)}
                </div>
            </div>

            <button type="button" className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Cart;