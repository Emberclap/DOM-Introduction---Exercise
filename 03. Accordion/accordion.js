function toggle() {
    let textElement = document.getElementById('extra');
    let buttonContent = document.getElementsByClassName('button')[0];
    
    let buttonState = buttonContent.textContent;
    if (buttonState === 'More'){
        textElement.style.display = 'block';
        buttonContent.textContent = 'Less';
    }
    else{
        textElement.style.display = 'none';
        buttonContent.textContent = 'More';
    }
}