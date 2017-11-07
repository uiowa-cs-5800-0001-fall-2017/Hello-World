// These two are just for linting purposes. Leave them in, but don't worry about them.
/* eslint-env jquery */
/* global Blockly:true */
/* global Chatbot:true */

goog.provide('Chatbot.Data')

// Same as 'window.onload', but uses jQuery so it doesn't overwrite the other one in index.js
Chatbot.saveLocalWorkspace = function () {
  var xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace))
  localStorage.setItem('xml', xml)
}

Chatbot.getLocalWorkspace = function () {
  return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.mainWorkspace))
}

Chatbot.loadLocalWorkspace = function () {
  if (localStorage.xml != null) {
    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(localStorage.xml), Blockly.mainWorkspace)
  }else{
    console.log('No local save found')
  }
}

const client = new stitch.StitchClient('chatblocks-xzynv');
const db = client.service('mongodb', 'mongodb-atlas').db('ChatBlocks');
client.login().then(() =>
  db.collection('Scripts').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
).then(()=>
  db.collection('Scripts').find({owner_id: client.authedId()})
).then(docs => {
  console.log("Found docs", docs)
  console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
  console.error(err)
});
