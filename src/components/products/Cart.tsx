import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const Cart: FC = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector(state => state.cart);

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
    
        </div>
    );
};

export default Cart;