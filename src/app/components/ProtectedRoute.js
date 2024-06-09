"use client"
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user === null) {
      router.push('/');
      alert('Please log in to access the dashboard.');  
    } else {
      setIsAuthenticated(true);
    }
  }, [user, router]);

  return isAuthenticated? children : null;
};


export default ProtectedRoute;
