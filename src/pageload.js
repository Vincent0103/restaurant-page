import headerNavbar from "./staticElements";
import homeContent from "./home";
import "./components/style.css";

export default function addContent() {
  const content = document.querySelector("#content");
  const headerNavbarElement = headerNavbar();
  let currentContent = homeContent();

  // event listener for when the content's data-index changes
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes") {
        if (mutation.target.getAttribute("data-index") == 1) {
          content.innerHTML = "";
          currentContent = homeContent();
        } else if (mutation.target.getAttribute("data-index") == 2) {
          import("./menu").then(module => {
            const menuContent = module.default;
            content.innerHTML = "";
            currentContent = menuContent();
          })
        } else {
          import("./contact").then(module => {
            const contactContent = module.default;
            content.innerHTML = "";
            currentContent = contactContent();
          })
        }
      }
    });
  });

  observer.observe(content, {
    attributes: true //configure it to listen to attribute changes
  });

  return [headerNavbarElement, currentContent];
}