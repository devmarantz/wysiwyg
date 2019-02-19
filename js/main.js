import toggleActive from './toggleActive.js'

//Select the edit buttons
//Add event listener of the click edit button
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));

//listen for 'input' events from editor
document.querySelectorAll('.editor').forEach(editor => editor.addEventListener('input', handleEditorInput));

// when fired, update text (or style) of sibling '.text-element'
function handleEditorInput(event){
    if(event.target.type === 'text' || event.target.tagName === 'TEXTAREA'){
        const textElement = event.currentTarget.parentNode.querySelector('.text-element');
        const text = event.target.value;
        textElement.innerText = text;
    }
}