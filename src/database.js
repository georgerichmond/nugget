import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC2ALnvG2NMd5yp1f0SyDpvX4NM3gai2_M",
  authDomain: "nugget-stage.firebaseapp.com",
  databaseURL: "https://nugget-stage.firebaseio.com",
  projectId: "nugget-stage",
  storageBucket: "nugget-stage.appspot.com",
  messagingSenderId: "551989691075"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
