// These two are just for linting purposes. Leave them in, but don't worry about them.
/*eslint-env jquery*/
/*global Blockly:true*/

// Same as 'window.onload', but uses jQuery so it doesn't overwrite the other one in index.js
function saveLocalWorkspace() {
  var xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace))
  localStorage.setItem('xml',xml)
}

function loadLocalWorkspace() {
  if (localStorage.xml != null) {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(localStorage.xml), Blockly.mainWorkspace)
  }else{
    console.log('No local save found')
  }
}
