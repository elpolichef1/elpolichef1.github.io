// ============================================
// FIREBASE INICIALIZACIÓN
// ============================================

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

// TU CONFIGURACIÓN DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyC15mRJfoeD4F-5u32YyAhoQ8c0ZW9_O8s",
    authDomain: "aprobadoya-login.firebaseapp.com",
    projectId: "aprobadoya-login",
    storageBucket: "aprobadoya-login.firebasestorage.app",
    messagingSenderId: "786027866487",
    appId: "1:786027866487:web:0e08ee55100e456c521972",
    measurementId: "G-7DDRTDGEGY"
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