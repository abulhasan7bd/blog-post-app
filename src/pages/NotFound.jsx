import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({res}) => {
    return (
        <div className="h-[100vh] w-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{res ? res : "404 - Page Not Found"}</h2>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <Link to="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow">
                    ⬅ Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
