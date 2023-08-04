import headerNavbar from "./staticElements";
import homeContent from "./home";
import menuContent from "./menu";
import "./components/home.css";

export default function addContent() {
  const content = document.querySelector("#content");
  const headerNavbarElement = headerNavbar();
  let currentContent = menuContent();

  // event listener for when the content's data-index changes
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes") {
        if (mutation.target.getAttribute("data-index") == 1) {
          content.innerHTML = "";
          currentContent = homeContent();
        } else if (mutation.target.getAttribute("data-index") == 2) {
          content.innerHTML = "";
          currentContent = menuContent();
        } else {
          content.innerHTML = "";
        }
      }
    });
  });

  observer.observe(content, {
    attributes: true //configure it to listen to attribute changes
  });

  return [headerNavbarElement, currentContent];
}