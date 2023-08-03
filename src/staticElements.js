export default function addHeader() {
    let headerLinks = [];
    const headerNavbar = document.createElement("div");
    headerNavbar.classList.add("header");

    const brandName = document.createElement("h1");
    brandName.classList.add("brand-name");
    brandName.textContent = "Sachet";

    const ul = document.createElement("ul");

    const homeLink = document.createElement("li");
    homeLink.classList.add("navbar-links");
    headerLinks.push(homeLink);
    homeLink.textContent = "Home";

    const menuLink = document.createElement("li");
    menuLink.classList.add("navbar-links");
    headerLinks.push(menuLink);
    menuLink.textContent = "Menu";

    const contactLink = document.createElement("li");
    contactLink.classList.add("navbar-links");
    headerLinks.push(contactLink);
    contactLink.textContent = "Contact";

    ul.append(homeLink, menuLink, contactLink);
    headerNavbar.appendChild(brandName);
    headerNavbar.appendChild(ul);

    const content = document.querySelector("#content");
    headerLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (link.textContent === "Home") {
                content.setAttribute("data-index", 1);
            } else if (link.textContent === "Menu") {
                content.setAttribute("data-index", 2);
            } else {
                content.setAttribute("data-index", 3);
            }
        })
    })
    return headerNavbar;
}