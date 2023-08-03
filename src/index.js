import addContent from "./pageload";

window.addEventListener("DOMContentLoaded", () => {
  const elements = addContent();
  elements.forEach(element => {
    document.body.appendChild(element);
  })
})