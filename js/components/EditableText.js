export default class EditableText extends HTMLElement {
    constructor(){
        super();

        this.toggleActive = this.toggleActive.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <button type="button" class="edit-button">Edit</button>
            <button type="button" class="save-button">Save</button>
            <p class="text-element">Go ahead, edit me however you want!</p>

            <wysiwyg-editor></wysiwyg-editor>
        `;
        
        //Add event listener of the click edit button        
        this.querySelectorAll('.edit-button, .save-button').forEach(button => button.addEventListener('click', this.toggleActive));
        // actions up
        this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
    }

    // toggleActive = () =>{
    toggleActive () {
        //toggle the class active
        this.classList.toggle('active');
    }

    handleInput(event){
        const textElement = this.querySelector('.text-element');
        if(event.target.type === 'text' || event.target.tagName === 'TEXTAREA'){
            const text = event.target.value;
            textElement.innerText = text;
        } else {
            //handle the styles
            // example: change font size
            // name: 'font-size'
            // data-unit: "px"
            // value: "32"
            const {value, name: styleName} = event.target;
            // value = '32'
            // styleName = "font-size"
            const unit = event.target.dataset.unit || '';
            // unit = "px"
            textElement.style[styleName] = `${value}${unit}`;
            // h1.style.fontSize OR h1.style["font-size"] OR h1.style["fontSize"] = "32px"
        }
    }
}