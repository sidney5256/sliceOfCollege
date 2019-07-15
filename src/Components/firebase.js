import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyD1j-jKv77ffwom2sz4A8Jb7NWLrc8rPs8",
    authDomain: "sliceofcollege-1fcaa.firebaseapp.com",
    databaseURL: "https://sliceofcollege-1fcaa.firebaseio.com",
    projectId: "sliceofcollege-1fcaa",
    storageBucket: "sliceofcollege-1fcaa.appspot.com",
    messagingSenderId: "79099187210"
  };
firebase.initializeApp(config);
export default firebase;
