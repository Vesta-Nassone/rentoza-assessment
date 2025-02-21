import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { updateQuantity, removeFromCart } from '../../store/slices/cartSlice';

// Define the props for the CartItem component
interface CartItemProps {
    item: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    const { product, quantity } = item;

    // Handle quantity change
    const handleQuantityChange = (newQuantity: number) => {
        dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
    };

    // Handle removing the item from the cart
    const handleRemove = () => {
        dispatch(removeFromCart(product.id));
    };

    return (
        <div className="py-4 flex flex-col sm:flex-row">
            <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
                {/* Link to the product detail page */}
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>

            <div className="flex-grow sm:ml-4">
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors">
                        {product.title}
                    </h3>
                </Link>
                <p className="text-gray-500 text-sm mt-1 line-clamp-1">{product.description}</p>

                <div className="mt-2 flex justify-between items-center">
                    <span className="font-semibold text-indigo-600">R{product.price.toFixed(2)}</span>

                    <div className="flex items-center">
                        {/* Decrease quantity button */}
                        <button type="button"
                            onClick={() => handleQuantityChange(quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l bg-gray-100 hover:bg-gray-200 cursor-pointer"
                        >
                            -
                        </button>
                        {/* Quantity input */}
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            placeholder="Quantity"
                            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                            className="w-12 h-8 border-t border-b border-gray-300 text-center"
                        />
                        {/* Increase quantity button */}
                        <button type="button"
                            onClick={() => handleQuantityChange(quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r bg-gray-100 hover:bg-gray-200 cursor-pointer"
                        >
                            +
                        </button>

                        {/* Remove item button */}
                        <button type="button"
                            onClick={handleRemove}
                            className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;