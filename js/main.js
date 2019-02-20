//Functions
import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

//Classes
import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';

//Defines Component code as 'whatever you name it'
customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);

//listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

document.getElementById('add-button').addEventListener('click', addParagraph);
