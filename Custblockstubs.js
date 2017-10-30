
Blockly.JavaScript['validate'] = function(block) {
  var value_ar = Blockly.JavaScript.valueToCode(block, 'ar', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ar2 = Blockly.JavaScript.valueToCode(block, 'ar2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  var k = false;
  for(int i = 0; i < ar2.length; i++){
	  for (int j = 0; j < ar; j++ ){
		  
		  if(ar2[i] = ar[j]){k == true;}
		  
	  }
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, k];
};


Blockly.JavaScript['input'] = function(block) {
  var text_intromessage = block.getFieldValue('intromessage');
  // TODO: Assemble JavaScript into code variable.
  var code = var div = ('<div id = "bot-bubble-message" >'+ text_intromessage + "</div>");
  return code;
};

Blockly.JavaScript['response'] = function(block) {
  var text_userresponse = block.getFieldValue('userResponse');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['get_user_resopnse'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = $("#chat-input").keydown(function(event) {
	 if (event.keyCode == 13) 
	 {
          event.preventDefault();
	     if($("#char-input").val() != ""){
		 var userResponse =  $("#chat-input").val()
			 socket.emit("chat-message", $("#chat-input").val());   
		  }
		  $("#chat-input").val("");
		  
		  $("#chat-container").animate({ scrollTop: 10000000 }, "fast"); //this makes the scroll bar go to the bottom.

	 };
  return code;
};
// grammar checking block 
Blockly.JavaScript['userresonsevarable'] = function(block) {
  var value_userresonse = Blockly.JavaScript.valueToCode(block, 'UserResonse', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['question_block'] = function(block) {
  var text_question_they_want_to_ask = block.getFieldValue('Question they want to ask');
  // TODO: Assemble JavaScript into code variable.
    var code = var div = ('<div id = "bot-bubble-message" > text_question_they_want_to_ask + "</div>");\n';
  return code;

Blockly.JavaScript['question_input_block'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['socket_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = var express = require('express');
 var app = express();
 var server = require('http').createServer(app);
 var io = require('socket.io').listen(server);
 var path = require('path');
 app.use(express.static(path.join(__dirname, 'public')));
 app.set('view engine', 'ejs');

server.listen(process.env.PORT || 8000, function() {
  console.log('Server listening');
});

//-----------------------------------------------------------------------------
// Routes.
//-----------------------------------------------------------------------------
app.get("/", function(req, res) {
    res.render("chat");
});

//-----------------------------------------------------------------------------
// Configure web sockets.
//-----------------------------------------------------------------------------
io.sockets.on("connection", function(socket) {

    socket.on("chat-message", function(message) {
        io.sockets.emit("chat-message", message);
    });

});

  return code;
};
// going to send to a place putting get requests
Blockly.JavaScript['send'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['end_sockets'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = socket.disconnect();
  return code;
};

Blockly.JavaScript['http_get'] = function(block) {
  var url = block.getFieldValue('url');
  var code;
  var value_slave = Blockly.JavaScript.valueToCode(this, 'slave', Blockly.JavaScript.ORDER_ATOMIC);
  var value_script = Blockly.JavaScript.valueToCode(this, 'script', Blockly.JavaScript.ORDER_ATOMIC);
  
  //var url_prefix =  "http://";
  //var slave      = "8888";
  //var scriptname_prefix = "132.162.2.136:";
  //var url = url_prefix + scriptname_prefix + value_script + slave;
  var xmlHttp = "var xmlHttp = new XMLHttpRequest();";
  var xmlopen = "xmlHttp.open( 'GET', " + url + ", false );";
  var xmltry = "xmlHttp.send( null );" + '\n' + "alert(xmlHttp.responseText)";
  code = xmlHttp + '\n' + xmlopen + '\n' + xmltry;
  
  return code;
};

Blockly.JavaScript['http_put'] = function(block) {
  var url = block.getFieldValue('url');
  var code;
  var value_slave = Blockly.JavaScript.valueToCode(this, 'slave', Blockly.JavaScript.ORDER_ATOMIC);
  var value_script = Blockly.JavaScript.valueToCode(this, 'script', Blockly.JavaScript.ORDER_ATOMIC);
  
  //var url_prefix =  "http://";
  //var slave      = "8888";
  //var scriptname_prefix = "132.162.2.136:";
  //var url = url_prefix + scriptname_prefix + value_script + slave;
  var xmlHttp = "var xmlHttp = new XMLHttpRequest();";
  var xmlopen = "xmlHttp.open( 'PUT', " + url + ", false );";
  var xmltry = "xmlHttp.send( null );" + '\n' + "alert(xmlHttp.responseText)";
  code = xmlHttp + '\n' + xmlopen + '\n' + xmltry;
  
  return code;
};