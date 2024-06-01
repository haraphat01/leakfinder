// components/PurchaseCredits.js
import { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
export default function PurchaseCredits() {
  const { user} =  useAuth();

  const handlePurchase = async () => {
    const stripe = await stripePromise;
    const session = await axios.post('/api/stripe', { userId: user.uid });
    await stripe.redirectToCheckout({ sessionId: session.data.id });
  };

  return (          
    <button
      onClick={handlePurchase}
      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
    >
      Buy Credits
    </button>
  );
}
