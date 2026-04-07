import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    orderBy,
    updateDoc,
    arrayUnion,
    deleteDoc,
    where,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDoY5Zp_3z5_qVPOGzRzqayIok7XS5W8Nw",
    authDomain: "aprobadoya-final.firebaseapp.com",
    projectId: "aprobadoya-final",
    storageBucket: "aprobadoya-final.firebasestorage.app",
    messagingSenderId: "299130896445",
    appId: "1:299130896445:web:984cfcd7efbf546deaea54",
    measurementId: "G-P20F08W61Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { 
    app, auth, db, googleProvider,
    signInWithPopup, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, sendPasswordResetEmail,
    signOut, onAuthStateChanged,
    doc, setDoc, getDoc, getDocs, collection, query, orderBy, updateDoc, arrayUnion, deleteDoc, where, onSnapshot
};