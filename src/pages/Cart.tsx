import { FC } from 'react';
import Cart from '../components/products/Cart';

const CartPage: FC = () => {
    return (
        <div className="pt-8 mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 pt-8">Your Shopping Cart</h1>
            <Cart/>
        </div>
    );
};

export default CartPage;