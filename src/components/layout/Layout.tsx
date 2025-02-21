import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2025 FakeStore. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;