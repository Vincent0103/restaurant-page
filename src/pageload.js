import addHeaderNavbar from "./staticElements";
import addHomeContent from "./home";
import addFooterContent from "./footer";
import "./components/style.css";

export default function addContent() {
  const content = document.querySelector("#content");
  const headerNavbarElement = addHeaderNavbar();
  let currentContent = addHomeContent();
  let footerContent = addFooterContent();

  // event listener for when the content's data-index changes
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "attributes") {
        if (mutation.target.getAttribute("data-index") == 1) {
          content.innerHTML = "";
          currentContent = addHomeContent();
        } else if (mutation.target.getAttribute("data-index") == 2) {
          import("./menu").then(module => {
            const addMenuContent = module.default;
            content.innerHTML = "";
            currentContent = addMenuContent();
          })
        } else {
          import("./contact").then(module => {
            const addContactContent = module.default;
            content.innerHTML = "";
            currentContent = addContactContent();
          })
        }
        window.scrollTo(0, 0);
      }
    });
  });

  observer.observe(content, {
    attributes: true //configure it to listen to attribute changes
  });

  return [headerNavbarElement, currentContent, footerContent];
}