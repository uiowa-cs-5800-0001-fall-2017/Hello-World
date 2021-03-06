// Add block names/categories here to add them to the toolbox
var BLOCKS = {
  categories: [{
      name: 'Basic',
      blocks: ['controls_whileUntil', 'text', 'text_print', 'controls_if', 'logic_boolean', 'logic_compare', 'variables_get', 'variables_set'],
      color: '210'
    },
    {
      name: 'Requests',
      blocks: [],
      color: '80'
    },
    {
      name: 'Chatbot',
      blocks: ['response', 'input', 'question_block', 'userresponsevarable', 'contains', 'if_enter', 'get_user_response', 'user_info_save'],
      color: '20'
    },
    {
      name: 'Function',
      blocks: [],
      color: '50'
    }

  ]
};

function generateBlocks() {
  var toolbox = '<xml>';
  for (var category in BLOCKS.categories) {
    if (BLOCKS.categories[category].blocks.length > 0) {
      toolbox += `<category name="${BLOCKS.categories[category].name}" colour="${BLOCKS.categories[category].color}">`;
      /* Swap the previous line with this code to start with the first category expanded
      if(category==0){
        toolbox += `<category name="${BLOCKS.categories[category].name}" colour="${BLOCKS.categories[category].color}">`
      }else{
        toolbox += `<category name="${BLOCKS.categories[category].name}" colour="${BLOCKS.categories[category].color}">`
      }
      */
      for (var block in BLOCKS.categories[category].blocks) {
        toolbox += `  <block type="${BLOCKS.categories[category].blocks[block]}"></block>`;
      }
      toolbox += '</category>';
    }
  }
  toolbox += '</xml>';
  return toolbox;
}

// Download code from https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

window.onload = function() {
  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv, {
    toolbox: generateBlocks()
  });
  var onresize = function(e) { // jshint ignore:line
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);

  Chatbot.loadLocalWorkspace();

  function generateCode(event) { // jshint ignore:line
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    if (code === '') {
      $('#codeDisplay code').text('Add More Blocks to Generate Code');
    } else {
      $('#codeDisplay code').text(code);
    }
    Chatbot.saveLocalWorkspace();
  }
  workspace.addChangeListener(generateCode);

  function runCode() {

    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0)throw "INfinite loop.";\n';
    var code = Blockly.JavaScript.INFINITE_LOOP_TRAP = Blockly.JavaScript.workspaceToCode(workspace);
    try {
      eval(code);
      //jshint ignore: line
    } catch (e) {
      alert(e); //jshint ignore: line
    }
  }
  var runCodeButton = $('#runCodeButton');
  runCodeButton.click(runCode);

  function exportCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    // alert(code)
    download('blocklyCode_javascript.js', code);
  }

  function exportBlocks() {
    download('blocklyCode_blocks.txt', Chatbot.getBlocks());
  }

  function importBlocks(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      // Display file content
      Blockly.mainWorkspace.clear();
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(contents), Blockly.mainWorkspace);
    };
    reader.readAsText(file);
  }

  $('#exportJS').click(exportCode);
  $('#exportBlocks').click(exportBlocks);
  $('#fileButton').change(importBlocks);
  $('#importBlocks').click(function() {
    $('#fileButton').click();
  });

  function clearBlocks() {
    var count = workspace.getAllBlocks().length;
    if (count < 2 || window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
      workspace.clear();
      $('#codeDisplay code').text('Add More Blocks to Generate Code');
    }
  }
  $('#clearButton').click(clearBlocks);

  var codeButton = $('#codePreviewButton');
  var chatbotButton = $('#chatbotPreviewButton');
  var chatbotPreview = $('#chatbotDisplay');
  var codePreview = $('#codeDisplay');
  //Still generates code in the code preview even while hidden
  function previewCode() {
    if (chatbotButton.hasClass('active')) {
      chatbotButton.toggleClass('active', false);
      codeButton.toggleClass('active', true);
      chatbotPreview.hide();
      codePreview.show();
    }
  }

  function previewChatbot() {
    if (codeButton.hasClass('active')) {
      chatbotButton.toggleClass('active', true);
      codeButton.toggleClass('active', false);
      codePreview.hide();
      chatbotPreview.show();
    }
  }
  codeButton.click(previewCode);
  chatbotButton.click(previewChatbot);

  $("#copyScripts").click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#scriptsToCopy").text()).select();
    document.execCommand("copy");
    $temp.remove();
  });
  $("#copyChatbot").click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#widgetToPaste").text()).select();
    document.execCommand("copy");
    $temp.remove();
  });

  $("#showWidgetButton").click(function() {
    if (Chatbot.getUserId) {
      $("#widgetModal").modal();
      $("#widgetToPaste").append(`&lt;div id="BlocklyChatbot" data="${Chatbot.getUserId()}"&gt;&lt;/div&gt;`);
    } else {
      alert("You have to sign in to export your chatbot");
    }
  });
};
