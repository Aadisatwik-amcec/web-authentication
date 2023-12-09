// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSq8uAcNVvUcdM3551U7_oGh9kzWjW75o",
    authDomain: "learner-61fcb.firebaseapp.com",
    databaseURL: "https://learner-61fcb-default-rtdb.firebaseio.com",
    projectId: "learner-61fcb",
    storageBucket: "learner-61fcb.appspot.com",
    messagingSenderId: "778220538965",
    appId: "1:778220538965:web:6be7ec8abfbfdccad118dc",
    measurementId: "G-ZMCYJN21F0"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}