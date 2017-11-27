Blockly.Blocks['validate'] = {
  init: function() {
    this.appendValueInput("ar")
        .setCheck("Array")
        .appendField("Text List");
    this.appendValueInput("ar2")
        .setCheck("Array")
        .appendField("Matching List");
    this.setOutput("Boolean");
    this.setColour(0);
 this.setTooltip("vaildates strings ");
 this.setHelpUrl("help.html#validate");
  }
};

Blockly.Blocks['socket_setup'] = {
  init: function() {
    this.appendStatementInput("socket_set_up")
        .setCheck(null)
        .appendField("Botsetup");
    this.setColour(230);
 this.setTooltip("sets up sockets");
 this.setHelpUrl("help.html#socket_setup");
  }
};
Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "intromessage")
        .appendField("introduction ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("sends first message to user");
 this.setHelpUrl("help.html#input");
  }
};

Blockly.Blocks['get_user_resopnse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get user response");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("help.html#get_user_resopnse");
  }
};

Blockly.Blocks['userresponsevarable'] = {
  init: function() {
    this.appendValueInput("UserResponse")
        .setCheck("String")
        .appendField("User ResponseChecker");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['question_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Question ")
        .appendField(new Blockly.FieldTextInput(""), "Question they want to ask");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("sends next question to user");
 this.setHelpUrl("help.html#question_block");
  }
};



Blockly.Blocks['send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("send ")
        .appendField(new Blockly.FieldTextInput("URL"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['end_sockets'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end ");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['http_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("url for http GET request"), "url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
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
    this.setColour(225);
 this.setTooltip("ype the URL that you are sending the data to");
 this.setHelpUrl("help.html#http_put");
  }
};
