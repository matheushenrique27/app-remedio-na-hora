// Import the functions you need from the SDKs you need
import {firebase} from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYYrtIoM9TE8hdf2Q6jjh5dML4K1WSJfY",
  authDomain: "dm-ufrn.firebaseapp.com",
  projectId: "dm-ufrn",
  storageBucket: "dm-ufrn.appspot.com",
  messagingSenderId: "522169446668",
  appId: "1:522169446668:web:cea36be4c6df9d6ec11929"
};

if(!firebase.apps.lenth){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};