window.onload = function () {
   var bt = document.getElementById("bt");
   bt.onclick = runCode;
  var blocklyArea = document.getElementById('blocklyArea')
  var blocklyDiv = document.getElementById('blocklyDiv')
  var toolbox = '<xml>'
  toolbox += '  <block type="controls_if"></block>'
  toolbox += '  <block type="controls_whileUntil"></block>'
  toolbox += ' <block type="text"></block>'
  toolbox += ' <block type="text_print"></block>'
  toolbox += ' <block type="math_change"></block>'
  toolbox += ' <block type="http_get"></block>'
  toolbox += '</xml>'
  // var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
  var workspace = Blockly.inject(blocklyDiv, {
    toolbox: toolbox
  })
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea
    var x = 0
    var y = 0
    do {
      x += element.offsetLeft
      y += element.offsetTop
      element = element.offsetParent
    } while (element)
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px'
    blocklyDiv.style.top = y + 'px'
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px'
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px'
  }
  window.addEventListener('resize', onresize, false)
  onresize()
  Blockly.svgResize(workspace)

  function generateCode(event) {
    var code = Blockly.JavaScript.workspaceToCode(workspace)
    if (code === '') {
      $('#codeDisplay code').text('Add More Blocks to Generate Code')
    }else{
      $('#codeDisplay code').text(code)
    }
  }
  workspace.addChangeListener(generateCode)
  
  function runCode(){
	Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0)throw "INfinite loop.";\n';
  var code = Blockly.JavaScript.INFINITE_LOOP_TRAP = Blockly.JavaScript.workspaceToCode(workspace);
  try{
  eval(code);
  }
  catch(e){
  alert(e);
  }

  }

  function outputCode () {
    var code = Blockly.JavaScript.workspaceToCode(workspace)
    alert(code)
  }
  $('#outputButton').click(outputCode)

  function clearBlocks(){
    var count = workspace.getAllBlocks().length
    if (count < 2 || window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
      workspace.clear()
      $('#codeDisplay code').text('Add More Blocks to Generate Code')
    }
  }
  $('#clearButton').click(clearBlocks)
}
