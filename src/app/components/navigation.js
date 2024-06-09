"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from "next/image";
import logo from "../../../public/images/logo.png"
import { useRouter } from 'next/navigation'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../firebase/config"
import PAYMENTLINK from '../constant';

const Navbar = () => {
  const [user, setUser] = useState("")
 
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser(null);
          }
      });
  
      return () => unsubscribe();
  }, []);

  const signInWithGoogle = async (event) => {
    event.preventDefault();

    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        const userDoc = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDoc);
        console.log("users snap", userSnap)
        if (!userSnap.exists()) {
            // If user does not exist, create user in Firestore
            await setDoc(userDoc, { 
                email: user.email,
                name: user.displayName, 
                credits: 0 
            });
        }

        alert("Sign-in successful!"); // Alert the user

        router.push("/dashboard"); // Redirect to the dashboard page
    } catch (error) {
        console.log("Error signing in", error.message);
    }
}


  return (
      <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                      <Link href="/" className="text-2xl font-bold">
                          LeakFinder
                      </Link>
                  </div>
                  <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                          <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                              Home
                          </Link>
  
                          <Link href="/features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                              Features
                          </Link>
  
                          {user ? (
                               <>
                               <a href={`${PAYMENTLINK}?prefill_email=${user.email}`} target="_blank" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                  Buy Credit
                              </a>
                               <button onClick={() => signOut(auth)} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                   Log out
                               </button>
                           </>
                          ) : (
                              <button onClick={signInWithGoogle} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                  Log in
                              </button>
                          )}
  
                          <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-gray-100">
                              Dashboard
                          </Link>
                      </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                      <button
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                      >
                          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                              {isOpen ? (
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                  />
                              ) : (
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6h16M4 12h16m-7 6h7"
                                  />
                              )}
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
  
          {isOpen && (
              <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                          Home
                      </Link>
  
                      <Link href="/features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                          Features
                      </Link>
                      <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                          Contact
                      </Link>
                      <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium bg-white text-blue-600 hover:bg-gray-100">
                          Dashboard
                      </Link>
                      {user ? (
                          <>
                               <a href={`${PAYMENTLINK}?prefill_email=${user.email}`} target="_blank" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                                  Buy Credit
                              </a>
                              <button onClick={() => signOut(auth)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                                  Log out
                              </button>
                          </>
                      ) : (
                          <button onClick={signInWithGoogle} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                              Log in
                          </button>
                      )}
                  </div>
              </div>
          )}
      </div>
  );
};


export default Navbar;