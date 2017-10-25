// Add block names/categories here to add them to the toolbox
var BLOCKS = {
  categories: [
    {
      name: 'Basic',
      blocks: ['controls_if', 'controls_whileUntil', 'text', 'text_print'],
      color: '210'
    },
    {
      name: 'Chatbot',
      blocks: ['response', 'input'],
      color: '20'
    }
  ]
}
function generateBlocks () {
  var toolbox = '<xml>'
  for (var category in BLOCKS.categories) {
    if (BLOCKS.categories[category].blocks.length > 0) {
      toolbox += `<category name="${BLOCKS.categories[category].name}" colour="${BLOCKS.categories[category].color}">`
      /* Swap the previous line with this code to start with the first category expanded
      if(category==0){
        toolbox += `<category name="${BLOCKS.categories[category].name}" colour="${BLOCKS.categories[category].color}">`
      }else{
        toolbox += `<category name="${BLOCKS.categories[category].name}" colour="${BLOCKS.categories[category].color}">`
      }
      */
      for (var block in BLOCKS.categories[category].blocks) {
        toolbox += `  <block type="${BLOCKS.categories[category].blocks[block]}"></block>`
      }
      toolbox += '</category>'
    }
  }
  toolbox += '</xml>'
  return toolbox
}

// Download code from https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
function download (filename, text) {
  var pom = document.createElement('a')
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  pom.setAttribute('download', filename)

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents')
    event.initEvent('click', true, true)
    pom.dispatchEvent(event)
  } else {
    pom.click()
  }
}

window.onload = function () {
  var blocklyArea = document.getElementById('blocklyArea')
  var blocklyDiv = document.getElementById('blocklyDiv')
  var workspace = Blockly.inject(blocklyDiv, { toolbox: generateBlocks() })
  var onresize = function (e) {
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
    } else {
      $('#codeDisplay code').text(code)
    }
  }
  workspace.addChangeListener(generateCode)

  function outputCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace)
    // alert(code)
    download('blocklyCode.js', code)
  }

  $('#outputButton').click(outputCode)

  function clearBlocks() {
    var count = workspace.getAllBlocks().length
    if (count < 2 || window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
      workspace.clear()
      $('#codeDisplay code').text('Add More Blocks to Generate Code')
    }
  }
  $('#clearButton').click(clearBlocks)

  var codeButton = $('#codePreviewButton')
  var chatbotButton = $('#chatbotPreviewButton')
  var chatbotPreview = $('#chatbotDisplay')
  var codePreview = $('#codeDisplay')
  //Still generates code in the code preview even while hidden
  function previewCode() {
    if (chatbotButton.hasClass('active')) {
      chatbotButton.toggleClass('active', false)
      codeButton.toggleClass('active', true)
      chatbotPreview.hide()
      codePreview.show()
    }
  }

  function previewChatbot() {
    if (codeButton.hasClass('active')) {
      chatbotButton.toggleClass('active', true)
      codeButton.toggleClass('active', false)
      codePreview.hide()
      chatbotPreview.show()
    }
  }
  codeButton.click(previewCode)
  chatbotButton.click(previewChatbot)
}
