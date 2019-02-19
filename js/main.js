import toggleActive from './toggleActive.js'
import handleEditorInput from './handleEditorInput.js'
import addParagraph from './addParagraph.js'

//Select the edit buttons
//Add event listener of the click edit button
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));

//listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

document.getElementById('add-button').addEventListener('click', addParagraph);
