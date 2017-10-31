var mathChangeJson = {
  "message0": "change %1 by %2",
  "args0": [
    {"type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""]},
    {"type": "input_value", "name": "DELTA", "check": "Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230
};

Blockly.Blocks['math_change'] = {
  init: function() {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

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

Blockly.JavaScript['input'] = function(block) {
  var text_intromessage = block.getFieldValue('intromessage');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['response'] = function(block) {
  var text_userresponse = block.getFieldValue('userResponse');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['output'] = function(block) {
  var text_clientresonse = block.getFieldValue('ClientResonse');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['get_user_resopnse'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

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
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['question_input_block'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
