if (typeof Chatbot !== 'undefined') {} else {
  Chatbot = {};
}
Chatbot.getScriptFromServer = function(userId) {
  // This is for end users since it doesn’t require logging in.
  // Returns a promise, so use .then on the return variable
  // ex: Chatbot.getBlocksFromServer(x,y).then(function(data){console.log(data);});
  return $.get(`https://blocklychatbot.firebaseio.com/${userId}/script.json`).done(function(data) {
    console.log(`GET succeeded`);
    return data;
  }).fail(function(error) {
    console.log(`GET failed`);
    console.log(error);
  });
};

$(function() {
  var uid = $("#BlocklyChatbot").attr("data");
  var link = document.createElement('link');
  link.setAttribute("rel","stylesheet");
  link.setAttribute("type", "text/css");
  link.onload = function(){
    var chatContainer = document.createElement('div');
    chatContainer.setAttribute("id","chat-container");
    var chatInput = document.createElement('textarea');
    chatInput.setAttribute("id","chat-input");
    chatInput.setAttribute("contenteditable","true");
    chatInput.setAttribute("spellcheck","true");
    chatInput.loadCode = function(){
      Chatbot.getScriptFromServer(uid).then(function(data) {
            try {
              eval(data); //jshint ignore: line
            } catch (e) {
              alert(e); //jshint ignore: line
            }
      });
    };
    document.getElementById("BlocklyChatbot").appendChild(chatContainer);
    document.getElementById("BlocklyChatbot").appendChild(chatInput);
    chatInput.loadCode();
  };
  link.setAttribute("href", "chatbot.css");
  document.getElementsByTagName("head")[0].appendChild(link);

});
