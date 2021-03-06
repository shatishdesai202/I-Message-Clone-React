import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfHtVe-cwVkymj18dIWuLN-fTO9J1syRo",
    authDomain: "imessage-clone-340f1.firebaseapp.com",
    databaseURL: "https://imessage-clone-340f1.firebaseio.com",
    projectId: "imessage-clone-340f1",
    storageBucket: "imessage-clone-340f1.appspot.com",
    messagingSenderId: "581207806860",
    appId: "1:581207806860:web:423f96bf4bda7fac717ca9"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 


  export {auth, provider} 
  export default db; 