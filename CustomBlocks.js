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
 this.setTooltip("");
 this.setHelpUrl("");
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
 this.setTooltip("");
 this.setHelpUrl("");
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
 this.setHelpUrl("");
  }
};

Blockly.Blocks['userresonsevarable'] = {
  init: function() {
    this.appendValueInput("UserResonse")
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
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['socket_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Socket set up");
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
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
 this.setTooltip("Type entire URL, and surround it in quotes. Example: " +  "\"http://www.google.com\"");
 this.setHelpUrl("help.html#http_get");
  }
};

Blockly.Blocks['http_put'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("url for http PUT request"), "url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("Type entire URL, and surround it in quotes. Example: " + "\"http://www.google.com\"");
 this.setHelpUrl("help.html#http_put");
  }
};
