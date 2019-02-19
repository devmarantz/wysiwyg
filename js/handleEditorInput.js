// when fired, update text (or style) of sibling '.text-element'
export default function handleEditorInput(event){
    const textElement = event.currentTarget.parentNode.querySelector('.text-element');
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