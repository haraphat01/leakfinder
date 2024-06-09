// pages/api/saveUser.js

import mongoose from 'mongoose';

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://leakfinder:abekeapo1.@serverlessinstance0.g4p5oue.mongodb.net/?retryWrites=true&w=majority&appName=ServerlessInstance0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a Mongoose schema for the user
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    credits: Number,
},  { collection: 'users' });

const User = mongoose.model('User', userSchema);

export default async function POST(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, name, credits } = req.body;

            // Create a new user document
            const newUser = new User({
                email,
                name,
                credits,
            });

            // Save the user document to the database
            await newUser.save();

            res.status(200).json({ message: 'User saved successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to save user' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}