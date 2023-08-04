export default function addFooterContent() {
  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");

  const unsplashLink = document.createElement("a");
  unsplashLink.href = "https://unsplash.com/";
  unsplashLink.textContent = "Unsplash";

  const otacosLink = document.createElement("a");
  otacosLink.href = "https://o-tacos.com/";
  otacosLink.textContent = "O'Tacos";

  const p = document.createElement("p");
  p.textContent = " | Images taken from ";

  const authorP = document.createElement("p");
  authorP.textContent = "Made by ";

  const authorLink = document.createElement("a");
  authorLink.href = "https://github.com/Vincent0103";
  authorLink.text = "Vincent0103";

  const andP = document.createElement("p");
  andP.textContent = " and ";

  footer.append(authorP, authorLink, p, unsplashLink, andP, otacosLink);
  return footer;
}