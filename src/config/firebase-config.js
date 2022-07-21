import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDKmdnmLgQ9LNE5-8GI5Ya1-N-D3aoqlaY',
    authDomain: 'e-commerce-24eeb.firebaseapp.com',
    projectId: 'e-commerce-24eeb',
    storageBucket: 'e-commerce-24eeb.appspot.com',
    messagingSenderId: '448110687314',
    appId: '1:448110687314:web:854b197a1c9767ffe71b8b',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
