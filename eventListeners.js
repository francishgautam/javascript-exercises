var element = document.getElementById("button");

element.addEventListener("click", fun);

function fun(e) {
  //   alert("You have used the event listener");
  document.querySelector("#button").style.backgroundColor = "#ff0000";
  document.querySelector("#para").innerHTML =
    "A fine addition to my collection ";

  console.log(e.target); //Search in the browser console

  console.log(e.target.id);

  console.log(e.clientX); // Gives the position of the mouse from the window

  console.log(e.offsetX); //From the element one at the start and so on to the end

  console.log(e.altKey); //True if alt is pressed
}
const el = document.getElementById("baton");
el.addEventListener("dblclick", runEvent);
el.addEventListener("mousedown", runEvent);
el.addEventListener("mouseup", runEvent);

function runEvent(e) {
  console.log("Event type:" + e.type);
}

const form = document.querySelector(".box");
form.addEventListener("keydown", key);

function key(e) {
  console.log("You entered a key");
  document.querySelector(".output").innerHTML = e.target.value;
  console.log(e.target.value);
}
