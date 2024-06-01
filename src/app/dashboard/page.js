"use client"
import ProtectedRoute from '../components/ProtectedRoute';
import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/navigation'
import { auth, db } from "../firebase/config"
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore"; 
import PAYMENTLINK from '../constant'
import Link from 'next/link';

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [credits, setCredits] = useState(0);
  const { user, setUser } = useAuth();

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
  }, [user]);

  const handleSearch = async () => {
    if (credits <= 0) {
      alert('You do not have enough credits to perform a search.');
      return;
    }

    // Mock search operation
    const mockResult = `Search result for ${searchInput}: No data found.`;
    setSearchResult(mockResult);

    // Deduct credit
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      credits: increment(-1)
    });

    // Update local state
    setCredits(credits - 1);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white p-4 sm:p-8">
        <div className="bg-black text-white p-6 sm:p-8 rounded shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4">Search for a Record</h2>
          <p className="mb-4">Credits: {credits}</p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter email or phone number"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
            />
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
          {searchResult && (
            <div className="mt-4 p-4 bg-gray-800 rounded">
              <p>{searchResult}</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
};