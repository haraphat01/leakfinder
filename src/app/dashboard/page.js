"use client"
import ProtectedRoute from '../components/ProtectedRoute';
import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/navigation'
import { auth, db } from "../firebase/config"
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, setDoc, updateDoc,increment } from "firebase/firestore"; 
import PurchaseCredits from "../components/PurchaseCredits"
import Link from 'next/link';


export default function Dashboard() {
const [searchInput, setSearchInput] = useState('');
const [searchResult, setSearchResult] = useState(null);
const [credits, setCredits] = useState(0);
const { user, setUser } =  useAuth();

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
           <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <p className="mb-4">Credits: {credits}</p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter email or phone number"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
        {searchResult && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <p>{searchResult}</p>
          </div>
        )}
        <div className="mt-4">
          {/* <PurchaseCredits /> */}
          <Link href="/stripe" aria-current="page">Buy Credit</Link>

        </div>
      </div>
    </div>
        </ProtectedRoute>
    )
};


