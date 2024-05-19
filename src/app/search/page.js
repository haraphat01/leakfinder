"use client"
import { useState } from 'react';

export default function Search() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <form
                onSubmit={handleSearch}
                className=" p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Search Database
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Email:
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder='search with your email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gray-900 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
                {message && (
                    <div className="mt-4 text-center text-green-500">
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}
