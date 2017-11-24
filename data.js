// goog.provide('Chatbot');
Chatbot = {};
Chatbot.database = null;

// Same as 'window.onload', but uses jQuery so it doesn't overwrite the other one in index.js
Chatbot.saveLocalWorkspace = function() {
  var xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
  localStorage.setItem('xml', xml);
};
Chatbot.getBlocks = function() {
  return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace));
};
Chatbot.getScript = function() {
  return Blockly.JavaScript.workspaceToCode(Blockly.mainWorkspace);
};

Chatbot.loadLocalWorkspace = function() {
  if (localStorage.xml != null) {
    Blockly.mainWorkspace.clear();
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(localStorage.xml), Blockly.mainWorkspace);
  } else {
    console.log('No local save found');
  }
};

Chatbot.getBlocksFromServer = function(userId) {
  // This is for end users since it doesn't require logging in.
  // Returns a promise, so use .then on the return variable
  // ex: Chatbot.getBlocksFromServer(x,y).then(function(data){console.log(data);});
  return $.get(`https://blocklychatbot.firebaseio.com/${userId}/blocks.json`).done(function(data) {
    console.log("GET succeeded");
    return data;
  }).fail(function(error) {
    console.log("GET failed");
    console.log(error);
  });
};
Chatbot.getScriptFromServer = function(userId) {
  // This is for end users since it doesn't require logging in.
  // Returns a promise, so use .then on the return variable
  // ex: Chatbot.getBlocksFromServer(x,y).then(function(data){console.log(data);});
  return $.get(`https://blocklychatbot.firebaseio.com/${userId}/script.json`).done(function(data) {
    console.log("GET succeeded");
    return data;
  }).fail(function(error) {
    console.log("GET failed");
    console.log(error);
  });
};

Chatbot.readFromServer = function() {
  //This is for use with the block editor and requires a user to be logged in
  // Returns a promise, so use .then on the return variable
  // ex: Chatbot.readFromServer(x).then(function(data){console.log(data);});
  return Chatbot.database.once('value').then(function(snapshot) {
    return snapshot.val();
  });
};

Chatbot.writeToServer = function(blocks, script) {
  var updates = {};
  updates.blocks = blocks;
  updates.script = script;
  console.log('here');
  Chatbot.readFromServer().then(function(data) {
    if (data.blocks === blocks) {
      return;
    } else {
      if (confirm("Are you sure you want to overwrite your cloud files? This action cannot be undone.")) {
        Chatbot.database.update(updates).then(function() {
          console.log("Successfully wrote to server");
        }).catch(function(error) {
          console.log("Failed to write to server");
          console.log(error);
        });
      } else {
        return;
      }
    }
  });

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
      // console.log(user);
      Chatbot.database = firebase.database().ref(user.uid);
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
      firebase.auth().signOut().then(function() {

      }).catch(function(error) {
        console.log("error signing in");
        console.log(error);
      });
    } else {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user.displayName + " has logged in");
      }).catch(function(error) {
        //Handle errors
        console.log('error logging in');
        console.log(error);
      });
    }
  });

  $("#publish").click(function() {
    Chatbot.writeToServer(Chatbot.getBlocks(), Chatbot.getScript());
  });
  $("#loadCloud").click(function() {
    console.log("here");
    Chatbot.readFromServer().then(function(data){
      console.log("blocks:",data.blocks);
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(data.blocks), Blockly.mainWorkspace);
    });
  });

});
