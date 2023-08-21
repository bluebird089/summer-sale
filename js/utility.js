function getTextValueById (idName){
    const element = document.getElementById(idName);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
};

function setElementText (idName, value){
    const element = document.getElementById(idName);
    element.innerText = value;  
};