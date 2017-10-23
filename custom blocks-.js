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

Blockly.JavaScript['connection'] = function(block) {
  var code;
  var value_slave = Blockly.JavaScript.valueToCode(this, 'slave', Blockly.JavaScript.ORDER_ATOMIC);
  var value_script = Blockly.JavaScript.valueToCode(this, 'script', Blockly.JavaScript.ORDER_ATOMIC);
  
  var url_prefix =  "http://";
  var slave      = "8888";
  var scriptname_prefix = "132.162.2.136:";
  var url = url_prefix + scriptname_prefix + value_script + slave;
  var xmlHttp = "var xmlHttp = new XMLHttpRequest();";
  var xmlopen = "xmlHttp.open( 'GET', " + url + ", false );";
  var xmltry = "xmlHttp.send( null );" + '\n' + "alert(xmlHttp.responseText)";
  code = xmlHttp + '\n' + xmlopen + '\n' + xmltry;
  
  return code;
};