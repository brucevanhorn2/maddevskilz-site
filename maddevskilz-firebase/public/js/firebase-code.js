// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVAW5uEd4x-WZaVTIM-4H-Naj8XFqQsMs",
    authDomain: "maddevskilz.firebaseapp.com",
    databaseURL: "https://maddevskilz.firebaseio.com",
    projectId: "maddevskilz",
    storageBucket: "maddevskilz.appspot.com",
    messagingSenderId: "645507090255"
};
firebase.initializeApp(config);

var googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

$('.login-link').click(function(){
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;

        // The signed-in user info.
        var user = result.user;

        sessionStorage.set("token", token);
        sessionStorage.set("user", JSON.stringify(user));

        $('.login-link').hide();
        $('.signup-link').hide();
        $('#user-name').text(user.displayName);
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('login error: ' + errorMessage);
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});