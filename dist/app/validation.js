function validateForm(formName, valueName) {
    const imputField = document.forms[formName][valueName];
    const inputText = document.forms[formName][valueName].value;
    if (!inputText) {
        imputField.style.borderColor = "red";
    }
    else {
        imputField.style.borderColor = "blue";
    }
}
export { validateForm };
