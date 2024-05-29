// components/PurchaseCredits.js
import { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import UserContext from '../context/UserContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PurchaseCredits() {
  const { user } = useContext(UserContext);

  const handlePurchase = async () => {
    const stripe = await stripePromise;
    const session = await axios.post('/api/create-checkout-session', { userId: user.uid });
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
