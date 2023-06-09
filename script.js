function divChange() {
    const classChecked = document.getElementById("classCheck").checked;
    const idChecked = document.getElementById("idCheck").checked;

    const classe = document.getElementsByClassName("box");
    const id = document.getElementById("square");

    if (classChecked) classChangeTrue(classe);
    else             classChangeFalse(classe);

    if (idChecked) IdChangeTrue(id);
    else          IdChangeFalse(id, classe);
}



function classChangeTrue(element) {
    for (let elements of element) {
        elements.style.backgroundColor = '#034c91';
        elements.style.color = 'whitesmoke';
    }
}

function classChangeFalse(element) {
    for (let elements of element) {
        elements.style.backgroundColor = '#d12369';
        elements.style.color = 'black';
    }
}


function IdChangeTrue(element) {
    element.style.backgroundColor = '#7906a2';
    element.style.borderStyle = 'ridge';
    element.style.borderRadius = '0px';
}

function IdChangeFalse(element, classElement) {
    element.style.backgroundColor = classElement[0].style.backgroundColor;
    element.style.borderStyle = 'outset';
    element.style.borderRadius = '10px';
}
