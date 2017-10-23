Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(""), "intromessage")
        .appendField("introduction ");
    this.setNextStatement(true, "String");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['response'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("resonse")
        .appendField(new Blockly.FieldTextInput("default"), "userResponse");
    this.setNextStatement(true, "String");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['output'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("output")
        .appendField(new Blockly.FieldTextInput(""), "ClientResonse");
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_user_resopnse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get user response");
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
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['question_input_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("ask question");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};