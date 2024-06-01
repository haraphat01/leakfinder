import { NextResponse, NextRequest } from 'next/server';
import admin from 'firebase-admin';
import { headers } from 'next/headers';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.firebaseio.com`
  });
}
const db = admin.firestore();
export async function POST(req: NextRequest, res: NextResponse) {
  const payload = await req.text();
  const signature = headers().get('stripe-signature');

  try {
    let event = stripe.webhooks.constructEvent(
      payload,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'charge.succeeded') {
      const chargeSucceeded = event.data.object;
      const email = chargeSucceeded.billing_details.email;
      const usersRef = db.collection('users');
      const querySnapshot = await usersRef.where('email', '==', email).get();

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userDocRef = userDoc.ref;

        // Update the credit for the user
        await userDocRef.update({ credits: admin.firestore.FieldValue.increment(5) });
      } else {
        console.log('User not found for email:', email);
      }
    }

    return new NextResponse('Success', { status: 200 });
  } catch (err) {
    console.error('Error handling Stripe webhook:', err);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}



