import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCGaVdyt4shW2wko6fUZlvQsKHJx7pa2vc",
    authDomain: "petshop-c84de.firebaseapp.com",
    projectId: "petshop-c84de",
    storageBucket: "petshop-c84de.appspot.com",
    messagingSenderId: "908367479041",
    appId: "1:908367479041:web:c841fa8ebc401411445b00"

}
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)