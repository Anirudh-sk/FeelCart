import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHXrnjr-hO7ia4JZygViBHXiWG8E-hFzw",
    authDomain: "vrshopping-b0110.firebaseapp.com",
    projectId: "vrshopping-b0110",
    storageBucket: "vrshopping-b0110.appspot.com",
    messagingSenderId: "215218781756",
    appId: "1:215218781756:web:445cb44275b2f4481a4d39",
    measurementId: "G-NLLHHXB7FY"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire