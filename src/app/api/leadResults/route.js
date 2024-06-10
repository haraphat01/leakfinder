import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function POST(req) {
  
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
  let passedValue = await new Response(req.body).text();
 
  let bodyreq = JSON.parse(passedValue);
 
  const { searchInput: email, searchInput: phoneNumber } = await bodyreq;
  
  // if (!email && !phoneNumber) {
  //   return NextResponse.json({ error: 'Email or phone number is required' }, { status: 400 });
  // }

  try {
    const client = await clientPromise;
    const db = client.db('leakfinder'); // Replace with your database name
    const collection = db.collection('leads'); // Replace with your collection name

    const query = {
      $or: [
        { emails: email },
        { phone_numbers: phoneNumber }
      ]
    };

    const lead = await collection.findOne(query);
    if (!lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json(lead, { status: 200 });
  } catch (error) {
    console.error('Error fetching lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
