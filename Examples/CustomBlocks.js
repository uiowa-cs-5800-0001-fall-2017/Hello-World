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


Blockly.Blocks['responsespeed'] = {
  init: function() {
    this.appendValueInput("Input speed")
        .setCheck("Number")
        .appendField("SpeedInput")
        .appendField(new Blockly.FieldNumber(0), "");
    this.setInputsInline(false);
    this.setOutput(true, "Global timer change");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['memoryfunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ShotTimeMemory");
    this.setOutput(true, "add the memory funciton");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['language'] = {
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
