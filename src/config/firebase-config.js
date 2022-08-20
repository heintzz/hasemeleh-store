import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: 'e-commerce-24eeb',
    storageBucket: 'e-commerce-24eeb.appspot.com',
    messagingSenderId: '448110687314',
    appId: '1:448110687314:web:854b197a1c9767ffe71b8b',
}

initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()
