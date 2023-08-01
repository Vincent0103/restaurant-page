import Icon from "./burito-homepage.png";

export default function addContent() {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.textContent = "Sachet de quoi?!";
  content.appendChild(h1);

  const img = new Image();
  img.src = Icon;
  img.style.height = "200px";
  img.style.width = "400px";
  content.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = "Why buy my buritos?";
  content.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet pellentesque diam, at dignissim urna. Cras sagittis magna nec urna aliquam tincidunt. Phasellus vel nisi hendrerit, placerat libero et, fermentum neque. Proin at consequat neque. Nam tristique id odio in gravida. Maecenas feugiat massa nec ipsum vulputate gravida. Pellentesque ultrices gravida accumsan.";
  content.appendChild(p);

  return content;
}