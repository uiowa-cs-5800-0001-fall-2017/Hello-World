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
 this.setHelpUrl("hel.html");
  }
};

Blockly.Blocks['socket_setup'] = {
  init: function() {
    this.appendStatementInput("socket_set_up")
        .setCheck(null)
        .appendField("Botsetup");
    this.setColour(230);
 this.setTooltip("sets up sockets");
 this.setHelpUrl("help.html");
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
 this.setHelpUrl("help.html#http_introduction");
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
 this.setHelpUrl("help.html#http_Question");
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
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("url for http PUT request"), "url");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
 this.setTooltip("Type the URL that you are sending the data to");
 this.setHelpUrl("help.html#http_put");
  }
};Blockly.Blocks['language'] = {
  init: function() {
    this.appendValueInput("UseriNPUT")
        .setCheck("String")
        .appendField("Languages Setting")
        .appendField(new Blockly.FieldDropdown([["English","OPTIONNAME"], ["Chinese","OPTIONNAME"], ["Franch","OPTIONNAME"], ["Germany","OPTIONNAME"], ["Russian","OPTIONNAME"], ["Korean","OPTIONNAME"], ["Janpan","OPTIONNAME"]]), "Lan");
    this.setOutput(true, "required language mode");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['search_function'] = {
  init: function() {
    this.appendValueInput("Userinput")
        .setCheck("String")
        .appendField("SearchBy")
        .appendField(new Blockly.FieldDropdown([["Google","Google"], ["Bing","bing"], ["Yahoo","yahoo"]]), "NAME");
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['grammar_check'] = {
  init: function() {
    this.appendValueInput("Userinput")
        .setCheck("String")
        .appendField("Grammar Chcek");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['response_speed2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speed Setting")
        .appendField(new Blockly.FieldDropdown([["Fast","OPTIONNAME"], ["Normal","OPTIONNAME"], ["Slow","OPTIONNAME"]]), "NAME");
    this.setOutput(true, "Change of global timer");
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};