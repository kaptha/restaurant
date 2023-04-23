import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-p-YJPzQajyJ-arx1DpL-5sforEeoNWo",
    authDomain: "restaurant-d6e2c.firebaseapp.com",
    databaseURL: "https://restaurant-d6e2c-default-rtdb.firebaseio.com",
    projectId: "restaurant-d6e2c",
    storageBucket: "restaurant-d6e2c.appspot.com",
    messagingSenderId: "303212850638",
    appId: "1:303212850638:web:f011a42971aa8b0871cf9f",
    measurementId: "G-Q4P1LM6T8R"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getDatabase();