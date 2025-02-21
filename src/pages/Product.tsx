import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProduct } from '../store/slices/productsSlice';
const ProductPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { selectedProduct, status, error } = useAppSelector(state => state.products);
    console.log(selectedProduct, status, error);

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct(parseInt(id)));
        }
    }, [id, dispatch]);


    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Error Loading Product</h2>
                <p className="text-gray-600 mb-6">{error}</p>
                <button type="button"
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    if (!selectedProduct) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Not Found</h2>
                <button type='button'
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-100">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="max-h-96 max-w-full object-contain"
                    />
                </div>

                <div className="md:w-1/2 p-8">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                        {selectedProduct.category}
                    </span>

                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedProduct.title}</h1>

                    <div className="flex items-center mb-6">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.round(selectedProduct.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-600 ml-2">({selectedProduct.rating.count} reviews)</span>
                    </div>

                    <p className="text-gray-600 mb-8">{selectedProduct.description}</p>

                    <div className="flex items-center justify-between mb-8">
                        <span className="text-3xl font-bold text-indigo-600">${selectedProduct.price.toFixed(2)}</span>
                        <span className="text-green-600 font-medium">In Stock</span>
                    </div>

                    <div className="flex space-x-4">
                        <button type="button"
                            className="flex-grow py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            Add to Cart
                        </button>

                        <button type="button"
                            onClick={() => navigate('/')}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;