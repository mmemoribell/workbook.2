window.onload = init;
// init.onGreetUserBtnClicked()
const name = document.getElementById("nameField");
  function init() {
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetBtnClicked;
  }
  function onGreetBtnClicked() {
    const name = document.getElementById("nameField").value;
    alert(name + " , un gusto conocerte");
  }