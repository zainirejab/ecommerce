import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCVrlu-_YBU_8N_f_PO4LomSklGEKbXQt0",
    authDomain: "ecommerce-582c3.firebaseapp.com",
    // databaseURL: "https://ecommerce-582c3.firebaseio.com",
    projectId: "ecommerce-582c3",
    storageBucket: "ecommerce-582c3.appspot.com",
    messagingSenderId: "1074431382747",
    appId: "1:1074431382747:web:61698e91a6a2315ceba8fe"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => {
      return auth.signInWithPopup(provider)
  }

  export default firebase
