import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header: FC = () => {

    return (
        <header className="fixed w-full bg-white text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="">
                    <img src={logo} alt="rentoza-logo" />
                </Link>
            </div>
        </header>
    );
};

export default Header;