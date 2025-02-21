import { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/index";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="bg-white z-10 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <Link to={`/product/${product.id}`}>
                <div className="h-64 flex items-center justify-center p-4 bg-gray-100">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain mix-blend-darken"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                        {product.description}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                        <span className="text-xl font-bold text-indigo-600">
                            R{product.price.toFixed(2)}
                        </span>
                        <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span className="text-gray-600 text-sm">
                                {product.rating.rate} ({product.rating.count})
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="px-4 pb-4">
                <button type="button"
                    onClick={handleAddToCart}
                    className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
