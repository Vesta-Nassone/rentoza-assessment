import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProduct } from '../store/slices/productsSlice';

const ProductPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
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


    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
           
        </div>
    );
};

export default ProductPage;