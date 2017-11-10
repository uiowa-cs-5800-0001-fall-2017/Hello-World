// These two are just for linting purposes. Leave them in, but don't worry about them.
goog.provide('Chatbot.Data');

// Same as 'window.onload', but uses jQuery so it doesn't overwrite the other one in index.js
Chatbot.saveLocalWorkspace = function() {
  var xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
  localStorage.setItem('xml', xml);
};

Chatbot.getLocalWorkspace = function() {
  return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
};

Chatbot.loadLocalWorkspace = function() {
  if (localStorage.xml != null) {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(localStorage.xml), Blockly.mainWorkspace);
  } else {
    console.log('No local save found');
  }
};
$(document).ready(function() {
  var loginButton = $("#loginButton");
  var config = {
    apiKey: "AIzaSyBaistpX-tR7EgwF_ZPBfVzAKobRN_e_B0",
    authDomain: "blocklychatbot.firebaseapp.com",
    databaseURL: "https://blocklychatbot.firebaseio.com",
    projectId: "blocklychatbot",
    storageBucket: "",
    messagingSenderId: "857756444543"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("signed in");
      console.log(user);
      loginButton.text("Log Out");
    } else {
      // User is signed out.
      console.log("signed out");
      loginButton.text("Log In");
    }
  }, function(error) {
    console.log(error);
  });
  loginButton.click(function() {
    var user = firebase.auth().currentUser;
    if (user) {
      firebase.auth().signOut().then(function(){

      }).catch(function(error) {
        console.log("error signing in");
        console.log(error);
      });
    } else {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token);
        console.log(user);
      }).catch(function(error) {
        //Handle errors
        console.log('error logging in');
        console.log(error);
      });
    }
  });

});

//
// firebase.auth().onAuthStateChanged(function(user) {
//   console.log(user);
//   if (user) {
//     console.log("just logged in")
//     $("#loginButton").text("Log Out")
//     // loggin in
//     globalUser = user;
//   } else {
//     console.log("just logged out");
//     // not logged in
//     $("#loginButton").text("Log In")
//   }
//   if(!$("#loginModal").attr('aria-hidden')){
//     $("#loginModal").modal('hide');
//   }
// });
//
// $("#loginModal").on('shown.bs.modal', function(e) {
//   if(globalUser){
//     console.log("logged in -> out");
//     firebase.auth().signOut().then(function(){
//       //Signout successful
//     }).catch(function(error){
//       //An error occurred
//       alert(error);
//     });
//   }else{
//     console.log("logged out -> setup")
//     //User is not signed in
//     var uiConfig = {
//       signInSuccessUrl: 'localhost:8000/help.html',
//       signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       ],
//       // Terms of service url.
//       tosUrl: 'localhost:8000/help.html'
//     };
//     // Initialize the FirebaseUI Widget using Firebase.
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
//     // The start method will wait until the DOM is loaded.
//     ui.start('#firebaseui-auth-container', uiConfig);
//   }
// })
// });
