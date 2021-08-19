var changeName = document.querySelector("#profileName");
var request = document.querySelector("#requests");
var connection = document.querySelector("#connections");

function change() {
    changeName.innerText = "John Doe"
}

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
    connection.innerText++;
}

function decline(id) {
    var element = document.querySelector(id);
    element.remove();
    request.innerText--;
}