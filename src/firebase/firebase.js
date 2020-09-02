import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAniLegQDMSvlXEka1aV8xwPedmu1L8zKI",
    authDomain: "facebook-clone-f5c41.firebaseapp.com",
    databaseURL: "https://facebook-clone-f5c41.firebaseio.com",
    projectId: "facebook-clone-f5c41",
    storageBucket: "facebook-clone-f5c41.appspot.com",
    messagingSenderId: "431726335167",
    appId: "1:431726335167:web:2eab757e8accd0b979220a"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider= new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;