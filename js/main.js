import toggleActive from './toggleActive.js'
import handleEditorInput from './handleEditorInput.js'

//Select the edit buttons
//Add event listener of the click edit button
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));

//listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));
