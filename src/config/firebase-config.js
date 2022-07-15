import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAcpzGdbJyWTN4aAl2Hng8WI41QhztlabA',
    authDomain: 'e-commerce-96390.firebaseapp.com',
    projectId: 'e-commerce-96390',
    storageBucket: 'e-commerce-96390.appspot.com',
    messagingSenderId: '463402034822',
    appId: '1:463402034822:web:98e65aaf288a721e581307',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)