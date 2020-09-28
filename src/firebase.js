// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// always keep any utilityfili start with small letter and component with Caps kro ab
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDCvzWHJ5TlXMVGgS1UUKgAetUPs1nTH3Y",
    authDomain: "fir-be429.firebaseapp.com",
    databaseURL: "https://fir-be429.firebaseio.com",
    projectId: "fir-be429",
    storageBucket: "fir-be429.appspot.com",
    messagingSenderId: "609876864262",
    appId: "1:609876864262:web:95170d3d02bb702f3fc287",
    measurementId: "G-1583H8VZ3M"
  };

  const db=firebase.initializeApp(firebaseConfig);
  export default db;