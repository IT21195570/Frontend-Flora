import firebase from 'firebase/app';
import 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDL2EbrXYKEywOJofjMuon4Rh8D9UaUBtw",
  // authDomain: "imageupload-f5b47.firebaseapp.com",
  // projectId: "imageupload-f5b47",
  // storageBucket: "imageupload-f5b47.appspot.com",
  // messagingSenderId: "295986854046",
  // appId: "1:295986854046:web:2c6feb2181aa176cc4a38f",
  // measurementId: "G-V6JTV0ND3M"

  apiKey: "AIzaSyBQZVCIoZuSOYVEjgTi5mgXGWfzqRyaQRo",
  authDomain: "sondurumamal-263d6.firebaseapp.com",
  projectId: "sondurumamal-263d6",
  storageBucket: "sondurumamal-263d6.appspot.com",
  messagingSenderId: "571352580422",
  appId: "1:571352580422:web:a44e41a0667c175b59a547",
  measurementId: "G-L961RTSJE8"


};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };