Blockly.Blocks['validate'] = {
  init: function() {
    this.appendValueInput("ar")
        .setCheck("Array")
        .appendField("text list");
    this.appendValueInput("ar2")
        .setCheck("Array")
        .appendField("matching list");
    this.setOutput("Boolean");
    this.setColour(260);
 this.setTooltip("vaildates that the strings are matching");
 this.setHelpUrl("help.html#validate");
  }
};

Blockly.Blocks['if_enter'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("if enter");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("returns true when the 'ENTER' button is pressed");
 this.setHelpUrl("help.html#if_enter");
  }
};

Blockly.Blocks['contains'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("contains")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setOutput(true, null);
    this.setColour(210);
 this.setTooltip("returns true if the attached block contains the 'default' string.");
 this.setHelpUrl("help.html#contains");
  }
};

Blockly.Blocks['socket_setup'] = {
  init: function() {
    this.appendStatementInput("socket_set_up")
        .setCheck(null)
        .appendField("bot setup");
    this.setColour(15);
 this.setTooltip("sets up sockets");
 this.setHelpUrl("help.html#socket_setup");
  }
};

Blockly.Blocks['initalizer'] = {
 init: function() {
   this.appendDummyInput()
       .appendField("initialize varibles");
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setColour(100);
this.setTooltip("");
this.setHelpUrl("help.html#initialize_variables");
 }
};

Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "intromessage")
        .appendField("introduction ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("sends first message to user");
 this.setHelpUrl("help.html#input");
  }
};

Blockly.Blocks['get_user_response'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get user response");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("help.html#get_user_resopnse");
  }
};

Blockly.Blocks['response'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("response")
        .appendField(new Blockly.FieldTextInput("default"), "userResponse");
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("help.html#response");
  }
};

Blockly.Blocks['userresponsevarable'] = {
  init: function() {
    this.appendValueInput("User Response")
        .setCheck("String")
        .appendField("check user response");
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("help.html#check_user_response");
  }
};

Blockly.Blocks['question_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("question")
        .appendField(new Blockly.FieldTextInput(""), "Question they want to ask");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("sends next question to user");
 this.setHelpUrl("help.html#question_block");
  }
};

Blockly.Blocks['send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("send")
        .appendField(new Blockly.FieldTextInput("URL"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("help.html#send");
  }
};

Blockly.Blocks['end_sockets'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("help.html#end_sockets");
  }
};

Blockly.Blocks['http_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("url for http GET request"), "url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Type URL you are requesting");
 this.setHelpUrl("help.html#http_get");
  }
};

Blockly.Blocks['http_put'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("the url for http PUT request"), "url");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Type the URL that you are sending the data to");
 this.setHelpUrl("help.html#http_put");
  }
};

// Blockly.Blocks['https_get'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldTextInput("url for https GET request"), "url");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("Type URL you are requesting");
//  this.setHelpUrl("help.html#https_get");
//   }
// };

// Blockly.Blocks['https_put'] = {
//   init: function() {
//     this.appendValueInput("data")
//         .setCheck("String")
//         .appendField(new Blockly.FieldTextInput("the url for https PUT request"), "url");
//     this.setInputsInline(false);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//  this.setTooltip("Type the URL that you are sending the data to");
//  this.setHelpUrl("help.html#https_put");
//   }
// };

Blockly.Blocks['language'] = {
  init: function() {
    this.appendValueInput("UseriNPUT")
        .setCheck("String")
        .appendField("language settings")
        .appendField(new Blockly.FieldDropdown([["English","English"], ["Chinese","Chinese"], ["French","French"], ["German","German"], ["Russian","Russian"], ["Korean","Korean"], ["Janpan","Janpan"]]), "Lan");
    this.setOutput(true, "required language mode");
    this.setColour(330);
 this.setTooltip("changes the language of the chatbot");
 this.setHelpUrl("help.html#language");
  }
};

Blockly.Blocks['search_function'] = {
  init: function() {
    this.appendValueInput("User Input")
        .setCheck("String")
        .appendField("search with")
        .appendField(new Blockly.FieldDropdown([["Google","Google"], ["Bing","Bing"], ["Yahoo","Yahoo"]]), "NAME");
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("searches the web with the selected search engine");
 this.setHelpUrl("help.html#search_function");
  }
};