var button = document.getElementsByClassName("enter")[0];
var input = document.getElementsByClassName("userinput")[0];
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
const deleteButton = document.getElementsByTagName("i");
var clearButton = document.getElementsByClassName("clear")[0];

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("div");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-minus-circle");
        createDiv[ind].appendChild(createDeleteButton);
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var divClassWrapper = document.createElement("div");
    divClassWrapper.classList.add("li-wrapper");

    var li = document.createElement("li");
    var createDiv = document.createElement("div");

    li.appendChild(document.createTextNode(input.value));
    divClassWrapper.appendChild(li);
    divClassWrapper.appendChild(createDiv);
    ul.appendChild(divClassWrapper);

    input.value = "";
    createDiv.classList.add("div");
    var createDeleteButton = document.createElement("i");
    createDeleteButton.classList.add("fa", "fa-minus-circle");
    createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();q
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("i");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}


function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();