// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://leakfinder:abekeapo1.@serverlessinstance0.g4p5oue.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0`; // Store your MongoDB URI in .env.local
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

clientPromise.then(() => {
  console.log('MongoDB connection successful');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

