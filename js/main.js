import toggleActive from './toggleActive.js'

//Select the edit buttons
//Add event listener of the click edit button
document.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', toggleActive));

