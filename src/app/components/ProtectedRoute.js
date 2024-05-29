// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  

  useEffect(() => {
    if (user === null) {
    alert('Please log in to access the dashboard.');
      router.push('/');
    }
  }, [user, router]);

  

  return children;
};

export default ProtectedRoute;
