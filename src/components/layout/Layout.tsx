import { FC } from 'react';
import Header from './Header';

const Layout: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
        </div>
    );
};

export default Layout;