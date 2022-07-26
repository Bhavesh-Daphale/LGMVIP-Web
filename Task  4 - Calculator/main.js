var display_1 = document.querySelector("#display1");
var display_2 = document.querySelector("#display2");
console.log(display_1);
console.log(display_2);
var equation = "";

function display(ch) {
    display_1.innerText += ch;

}

function delete_func() {
    display_1.innerText = display_1.innerText.slice(0,-1);
}

function allclear() {
    display_1.innerText = "";
    display_2.innerText = "";
}

function equal() {
    display_2.innerText = eval(display_1.innerText);
}





