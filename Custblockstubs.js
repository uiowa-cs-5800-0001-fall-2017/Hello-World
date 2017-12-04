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

Blockly.JavaScript['if_enter'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `$("#chat-input").keydown(function(event) { if (event.keyCode == 13) {`+statements_name+`}})`; 
;
  return code;
};

Blockly.JavaScript['contains'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var functionName = Blockly.JavaScript.provideFunction_(
      `contains`,
    [ `function ` + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + `(name) {`,
		`var k = false;`,
		`k = userResponse.toString().includes(` + ` name ` + `)`,   
		`return k;`,
		`}`]);
var code = functionName + '(' + '"' + text_name + '"' + ')';

return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['socket_setup'] = function(block) {
  var statements_socket_set_up = Blockly.JavaScript.statementToCode(block, 'socket_set_up');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  
  return code;
};

Blockly.JavaScript['input'] = function(block) {
  var text_intromessage = block.getFieldValue('intromessage').toString();
  // TODO: Assemble JavaScript into code variable.
  var code = (`var div = ('<div id = "bot-bubble-message" >'+` + '"' + text_intromessage + '"+' + `"</div>");` + `$("#chat-container").append(div.toString() + "<br />");  `);
  
  return code;
};

Blockly.JavaScript['response'] = function(block) {
  var text_userresponse = block.getFieldValue('userResponse');
  // TODO: Assemble JavaScript into code variable.
  var code = (`var div = ('<div id = "bot-bubble-message" >'+` + '"' + text_userresponse + '"+' + `"</div>");` + `$("#chat-container").append(div.toString() + "<br />");  `);
  
  return code;
};

Blockly.JavaScript['initalizer'] = function(block) {
 // TODO: Assemble JavaScript into code variable.
 var code = `var userResponse = ''; var validation = false;`
 
 return code;
};

Blockly.JavaScript['get_user_response'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `var userResponse = '';`+ `$("#chat-input").keydown(function(event) {  if (event.keyCode == 13) { event.preventDefault(); run = false; if ($("#char-input").val() != "") { userResponse = $("#chat-input").val(); var div = ('<div id = "chat-bubble-message" >'+` + ' userResponse ' + `+"</div>"); $("#chat-container").append(div.toString() + "<br />"); } $("#chat-input").val(""); $("#chat-container").animate({ scrollTop: 10000000 }, "fast"); }});`
	
  return code;
};
// grammar checking block
Blockly.JavaScript['userresponsevarable'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '$("#chat-input").keydown(function(event) {  if (event.keyCode == 13) {window.alert(userResponse)}});';
  // TODO: Change ORDER_NONE to the correct strength.
  
  return code;
};

Blockly.JavaScript['question_block'] = function(block) {
  var text_question_they_want_to_ask = block.getFieldValue('Question they want to ask');
  // TODO: Assemble JavaScript into code variable.
  var code = (`var div = ('<div id = "bot-bubble-message" >'+` + '"' + text_question_they_want_to_ask + '"+' + `"</div>");` + `$("#chat-container").append(div.toString() + "<br />");  `);
  
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
  var xmlOpen = "xmlHttp.open('GET', " + "\"" + block.getFieldValue('url') + "\"" + ", true);";
  var xmlSend = "xmlHttp.send(null);";
  var xmlresp = "alert(xmlHttp.responseText);";
  var code = xmlHttp + '\n' + xmlOpen + '\n' + xmlSend + '\n' + xmlresp + '\n';

  return code;
};

Blockly.JavaScript['http_put'] = function(block) {
  var data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var xmlHttp = "var xmlHttp = getNewHTTPObject();";
  var mimeType = "text/plain";
  var xmlOpen = "xmlHttp.open('PUT', " + "\"" + block.getFieldValue('url') + "\"" + ", false);";
  var xmlSet = "xmlHttp.setRequestHeader('Content-Type', mimeType);";
  var xmlSend = "xmlHttp.send($(" +  data + ").val());";
  var code = xmlHttp + '\n' + mimeType + '\n' + xmlOpen + '\n' + xmlSet + '\n' + xmlSend + '\n';

  return code;
};

// Blockly.JavaScript['search_function'] = function(block) {
//   var dropdown_name = block.getFieldValue('NAME');
//   var value_userinput = Blockly.JavaScript.valueToCode(block, 'Userinput', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Change ORDER_NONE to the correct strength.
//   if(dropdown_name == "Yahoo"){
//     var code = " var strn = 'https://search.yahoo.com/search?p='; window.open(strn.concat("+value_userinput+"));"
//   }
//   if(dropdown_name == "Google"){
//     var code = " window.open('https://www.google.com/search?q='"+value_userinput+");"
//     var code = " var strn = 'https://www.google.com/search?q='; window.open(strn.concat("+value_userinput+"));"
//   }
//   if(dropdown_name == "Bing"){
//     var code = " var strn = 'https://www.bing.com/search?q='; window.open(strn.concat("+value_userinput+"));"
//   }

//   return code;
// };
