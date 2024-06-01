import { doc, getDoc, setDoc, getDocs, updateDoc, increment, collection } from "firebase/firestore";
import { db } from '../../firebase/config';
const { getDocs, collection } = require("firebase/firestore");
const { db } = require('../../firebase/config');

async function logAllUsers() {
    console.log("heloj")
    const usersCollection = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollection);

    querySnapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
}

logAllUsers();