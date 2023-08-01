import addContent from "./pageload-module";

window.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(addContent());
  alert("Setup done!");
})