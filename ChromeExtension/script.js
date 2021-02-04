document.addEventListener("copy", function (event) {
    event.stopPropagation();
}, true);
document.addEventListener("paste", function (event) {
    event.stopPropagation();
}, true);
