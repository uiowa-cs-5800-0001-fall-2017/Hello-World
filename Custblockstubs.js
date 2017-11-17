Blockly.JavaScript['validate'] = function (block) {
  var value_ar = Blockly.JavaScript.valueToCode(block, 'ar', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ar2 = Blockly.JavaScript.valueToCode(block, 'ar2', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
    'validate',
    [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(aList,aList2) {',
		'var k = false;',
		'for(var i = 0; i < aList2.length; i++){',
		'var tmp = false;',
		'for(var j = 0; j < aList.length; j++ ){', 
		'if(aList[j] == aList2[i]){tmp = true;}',  
		'}',
		'if(tmp == true){k = true;}',
		'else{return k;}',
		'}',    
		'return k;',
		'}']);
// Generate the function call for this block.
var code = functionName + '(' + value_ar + ','+ value_ar2 + ')';
return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['socket_setup'] = function(block) {
  var statements_socket_set_up = Blockly.JavaScript.statementToCode(block, 'socket_set_up');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['input'] = function(block) {
  var text_intromessage = block.getFieldValue('intromessage');
  // TODO: Assemble JavaScript into code variable.
  var code = ('<div id = "bot-bubble-message" >' + text_intromessage + "</div>");
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
    if (event.keyCode == 13) {
      event.preventDefault();
      if ($("#char-input").val() != "") {
        var userResponse = $("#chat-input").val()
        socket.emit("chat-message", $("#chat-input").val());
      }
      $("#chat-input").val("");

      $("#chat-container").animate({
        scrollTop: 10000000
      }, "fast"); //this makes the scroll bar go to the bottom.

    };
  });
  return code;}

// grammar checking block
Blockly.JavaScript['userresponsevarable'] = function(block) {
  var value_userresponse = Blockly.JavaScript.valueToCode(block, 'UserResponse', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['question_block'] = function(block) {
  var text_question_they_want_to_ask = block.getFieldValue('Question they want to ask');
  // TODO: Assemble JavaScript into code variable.
  var code = ('<div id = "bot-bubble-message" > text_question_they_want_to_ask + "</div>");\n')
  return code;
};

Blockly.JavaScript['question_input_block'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['socket_setup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = require('express');
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
  
  var xmlHttp = "var xmlHttp = new XMLHttpRequest();";
  var xmlopen = "xmlHttp.open('GET', " + "\"" + block.getFieldValue('url') + "\"" + ", false);";
  var xmltry = "xmlHttp.send(null);";
  var xmlresp = "alert(xmlHttp.responseText);";
  var code = xmlHttp + '\n' + xmlopen + '\n' + xmltry + '\n' + xmlresp;

  return code;
};

Blockly.JavaScript['http_put'] = function(block) {
  
  var xmlHttp = "var xmlHttp = getNewHTTPObject();";
  var mimeType = "text/plain";
  var xmlopen = "xmlHttp.open('PUT', " + "\"" + block.getFieldValue('url') + "\"" + ", false);";
  var xmlset = "xmlHttp.setRequestHeader('Content-Type', mimeType);";
  var xmlsend = "xmlHttp.send($('#data').val());";
  var code = xmlHttp + '\n' + mimeType + '\n' + xmlopen + '\n' + xmlset + '\n' + xmlsend;

  return code;
};

Blockly.JavaScript['responsespeed'] = function(block) {
  var value_input_speed = Blockly.JavaScript.valueToCode(block, 'Input speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['memoryfunction'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['language'] = function(block) {
  var dropdown_lan = block.getFieldValue('Lan');
  var value_userinput = Blockly.JavaScript.valueToCode(block, 'UseriNPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['search_function'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_userinput = Blockly.JavaScript.valueToCode(block, 'Userinput', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `var box=document.getElementById(`+ value_userinput +`);` + ` window.location='http://www.google.com/search?q='+escape(box.value)';`;
  // TODO: Change ORDER_NONE to the correct strength.
  if(dropdown_name == "Yahoo"){
    var code = " window.open('https://search.yahoo.com/search?p='+value_userinput);"
  }
  if(dropdown_name == "Google"){
     var code = " window.open('https://www.google.com/search?q='+value_userinput);"
  }
  if(dropdown_name == "Bing"){
    var code = " window.open('https://www.bing.com/search?q='+value_userinput);"
  }
  return code;
};

Blockly.JavaScript['grammar_check'] = function(block) {
  var value_userinput = Blockly.JavaScript.valueToCode(block, 'Userinput', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = $("#chat-input").keydown(function(event) {     //get convert block
    var a = $Spelling.SpellCheckAsYouType('myTextArea');
    a.onChangeWord = function(from,to){alert(from+" changed to "+to)}
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//>>confuse
Blockly.JavaScript['response_speed2'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};