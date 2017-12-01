if(typeof Chatbot !== 'undefined'){}else{
  Chatbot = {};
}
Chatbot.getScriptFromServer = function(userId) {
    // This is for end users since it doesn’t require logging in.
    // Returns a promise, so use .then on the return variable
    // ex: Chatbot.getBlocksFromServer(x,y).then(function(data){console.log(data);});
    console.log(userId);
    return $.get(`https://blocklychatbot.firebaseio.com/${userId}/script.json`).done(function(data) {
      console.log(`GET succeeded`);
      return data;
    }).fail(function(error) {
      console.log(`GET failed`);
      console.log(error);
    });
   };
$(document).ready(function(){
  $("#BlocklyWidget").append("Hello World");
   $('html > head').append(`
     <style>
     /* Chat stylings */
     #chat-bubble-message{
       height: 50px;
       width: 85%;
       background: white;
       position: relative;
       cursor: pointer;
       border: 3px double black;
       border-radius: 10px;
       left: 13%;
     }
     #chat-bubble-message::before{
       content: “”;
       position: absolute;
       top: 100%;
       right: 30px;
       height: 20px;
       width: 20px;
       background: white;
       box-sizing:border-box;
       transform: rotate(45deg) translate(-50%);
       border-bottom: inherit;
       border-right: inherit;
       box-shadow: inherit;
     }

     #bot-bubble-message{
       height: 50px;
       width: 85%;
       background: gray;
       position: relative;
       cursor: pointer;
       border: 3px double black;
       border-radius: 10px;
     }
     #bot-bubble-message::before{
           content: “”;
       position: absolute;
       top: 100%;
       left: 30px;
       height: 20px;
       width: 20px;
       background: gray;
       box-sizing:border-box;
       transform: rotate(45deg) translate(-50%);
       border-bottom: inherit;
       border-right: inherit;
       box-shadow: inherit;
     }
     </style>`);

     $('#BlocklyWidget').append(`
    <div id=“chat-container” style="
             height: calc(100% - 3em);
             width: 100%;
             border-style: solid;
             background-color: lightblue;
             overflow-y: scroll;
             word-wrap: break-word;
             font-family: verdana;"></div>
      <textarea id=“chat-input” style="
             height: 3em;
             width: 100%;
             resize: none;
             overflow-y: scroll;
             border-style: solid;"
             contenteditable=“true” spellcheck=“true”></textarea>`);
   Chatbot.getScriptFromServer($("#BlocklyWidget").attr("data")).then(function(data){
    eval(data);
    console.log(data);
  })

});
