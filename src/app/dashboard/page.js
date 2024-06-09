"use client"
import ProtectedRoute from '../components/ProtectedRoute';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from "../firebase/config";
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import Link from 'next/link';

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [credits, setCredits] = useState(0);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const fetchCredits = async () => {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setCredits(userDoc.data().credits);
        }
      };
      fetchCredits();
    } else {
      router.push('/');
    }
  }, [user, router]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (credits <= 0) {
      alert('You do not have enough credits to perform a search.');
      return;
    }

    try {
      const response = await fetch('/api/leadResults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: searchInput, phoneNumber: searchInput }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);

        // Deduct credits only if search was successful
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          credits: increment(-1)
        });
        setCredits(credits - 1);
      } else {
        alert('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      alert('An error occurred while fetching search results');
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white p-4 sm:p-8">
        <div className="bg-black text-white p-6 sm:p-8 rounded shadow-md max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl mb-4">Search for a Record</h2>
              <p className="mb-4">Credits left: {credits}</p>
            </div>
          </div>
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              placeholder="Enter email or phone number"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
          {searchResult && (
            <div className="mt-4 p-4 bg-gray-800 rounded text-white">
              <h3 className="text-xl font-bold mb-2">Search Result:</h3>
              <p><strong>First Name:</strong> {searchResult.first_name}</p>
              <p><strong>Last Name:</strong> {searchResult.last_name}</p>
              <p><strong>Gender:</strong> {searchResult.gender}</p>
              <p><strong>Phone Number:</strong> {searchResult.phone_numbers}</p>
              <p><strong>Email:</strong> {searchResult.emails}</p>
              <p><strong>Address:</strong> {searchResult.address}</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
