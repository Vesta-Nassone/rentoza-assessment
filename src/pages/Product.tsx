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


    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
           
        </div>
    );
};

export default ProductPage;