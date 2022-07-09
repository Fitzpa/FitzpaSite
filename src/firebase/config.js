import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL-guPLCumM8nx2vwNU6AWt03zpx9YrIs",
  authDomain: "fitzpa-site.firebaseapp.com",
  projectId: "fitzpa-site",
  storageBucket: "fitzpa-site.appspot.com",
  messagingSenderId: "310695491692",
  appId: "1:310695491692:web:42907ba0e9688bd4280049",
  measurementId: "G-KSZX8HFVKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export {
  projectStorage,
  projectFirestore,
  ref,
  uploadBytesResumable,
  getDownloadURL,
};
