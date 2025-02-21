import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import logo from '../../assets/logo.png';

const Header: FC = () => {
    const { items } = useAppSelector(state => state.cart);
    const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="fixed z-50 w-full bg-white text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="font-bold text-2xl hover:text-indigo-200 transition-colors">
                    <img src={logo} alt="rentoza-logo" />
                </Link>

                <nav className="flex items-center">
                    <Link to="/" className="mr-6 hover:text-indigo-200 transition-colors">
                        Products
                    </Link>

                    <Link to="/cart" className="relative group">
                        <div className="p-2 bg-transparent text-black rounded-full hover:bg-gray-200 hover:rounded-full hover:shadow-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>

                        {cartItemsCount >= 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemsCount}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;