import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchProducts } from '../../store/slices/productsSlice';
import ProductCard from './ProductCard';

const ProductList: FC = () => {
    const dispatch = useAppDispatch();
    const { items: products, status, error } = useAppSelector(state => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-red-500 text-center">
                    <p className="text-xl font-semibold">Something went wrong</p>
                    <p className="mt-2">{error}</p>
                    <button type="button"
                        onClick={() => dispatch(fetchProducts())}
                        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;