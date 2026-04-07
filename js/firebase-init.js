import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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
    limit,
    updateDoc,
    where
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🔥 TU NUEVA CONFIGURACIÓN DE FIREBASE 🔥
const firebaseConfig = {
    apiKey: "AIzaSyDoY5Zp_3z5_qVPOGzRzqayIok7XS5W8Nw",
    authDomain: "aprobadoya-final.firebaseapp.com",
    projectId: "aprobadoya-final",
    storageBucket: "aprobadoya-final.firebasestorage.app",
    messagingSenderId: "299130896445",
    appId: "1:299130896445:web:984cfcd7efbf546deaea54",
    measurementId: "G-P20F08W61Y"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Exportar todo
export { 
    app, 
    auth, 
    db, 
    googleProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    doc, setDoc, getDoc, getDocs, collection, query, orderBy, limit, updateDoc, where
};