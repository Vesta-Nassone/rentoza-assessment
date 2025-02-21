import { FC } from 'react';
import ProductList from '../components/products/ProductList';

const HomePage: FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h1>
            <ProductList />
        </div>
    );
};

export default HomePage;