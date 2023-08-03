import headerNavbar from "./staticElements";
import homeContent from "./home";

import "./components/style.css";

export default function addContent() {
  const content = document.querySelector("#content");
  const headerNavbarElement = headerNavbar();
  let homeContentElement = homeContent();

  // event listener for when the content's data-index changes
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes") {
        if (mutation.target.getAttribute("data-index") == 1) {
          content.innerHTML = "";
          homeContentElement = homeContent();
        } else if (mutation.target.getAttribute("data-index") == 2) {
          content.innerHTML = "";
        } else {
          content.innerHTML = "";
        }
      }
    });
  });

  observer.observe(content, {
    attributes: true //configure it to listen to attribute changes
  });

  return [headerNavbarElement, homeContentElement];
}