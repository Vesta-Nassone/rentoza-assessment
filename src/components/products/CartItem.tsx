import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '../../types';

interface CartItemProps {
    item: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
    const { product } = item;


    return (
        <div className="py-4 flex flex-col sm:flex-row">
            <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0">
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
                    <span className="font-semibold text-indigo-600">${product.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;