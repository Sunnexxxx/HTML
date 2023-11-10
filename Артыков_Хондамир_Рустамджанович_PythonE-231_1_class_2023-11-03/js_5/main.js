let inputs = document.getElementsByTagName('input');
let currentIndex = 0;
function focusPrevious() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    inputs[currentIndex].focus();
}
function focusNext() {
    if (currentIndex < inputs.length - 1) {
        currentIndex++;
    }
    inputs[currentIndex].focus();
}