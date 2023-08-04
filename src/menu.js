import Icon from "./components/assets/chef-cooking-cropped.jpg"
import basicTacos from "./components/assets/dishes/basic-tacos.png";
import theBurgurTacos from "./components/assets/dishes/theBurgur-tacos.png";
import theFonduTacos from "./components/assets/dishes/theFondu-tacos.png";
import friesTheBase from "./components/assets/dishes/friesTheBase.png";
import friesNBacon from "./components/assets/dishes/fries'nbacon.png";
import friesNCheese from "./components/assets/dishes/fries'ncheese.png";
import oasis from "./components/assets/dishes/oasis.png";
import schweppes from "./components/assets/dishes/schweppes.png";

export default function addMenuContent() {
  const menuContent = document.querySelector("#content");
  const contentBg = document.createElement("div");
  contentBg.classList.add("menu-content-bg");
  contentBg.style.backgroundImage = `url(${Icon})`;
  menuContent.appendChild(contentBg);

  const blendContentBg = document.createElement("div");
  blendContentBg.classList.add("blend-content-bg");
  contentBg.appendChild(blendContentBg);

  const menuHeading = document.createElement("h2");
  menuHeading.classList.add("menu-headings");
  menuHeading.textContent = "MENU";

  const containerCards = document.createElement("div");
  containerCards.classList.add("menu-container-cards");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("menu-card-container");

  const basicTacosImg = new Image();
  basicTacosImg.src = basicTacos;

  const basicTacosName = document.createElement("h2");
  basicTacosName.textContent = "Basic Tacos";

  const basicTacosDesc = document.createElement("p");
  basicTacosDesc.textContent = "Taste the essence of Mexico in every bite with our Basic Tacos - tender fillings nestled in soft corn tortillas, a fiesta for your taste buds!";

  const basicTacosPrice = document.createElement("p");
  basicTacosPrice.textContent = "4$";

  const cardContainer2 = document.createElement("div");
  cardContainer2.classList.add("menu-card-container");

  const theBurgurTacosImg = new Image();
  theBurgurTacosImg.src = theBurgurTacos;
  theBurgurTacosImg.style.margin = "30px 0";

  const theBurgurTacosName = document.createElement("h2");
  theBurgurTacosName.textContent = "Theburgur Tacos";

  const theBurgurTacosDesc = document.createElement("p");
  theBurgurTacosDesc.textContent = "Experience a delightful fusion of flavors with \"theBurgur Tacos\" - where juicy burger-inspired fillings meet the traditional embrace of soft tortillas, a unique twist on taco perfection!";

  const theBurgurTacosPrice = document.createElement("p");
  theBurgurTacosPrice.textContent = "7$";

  const cardContainer3 = document.createElement("div");
  cardContainer3.classList.add("menu-card-container");

  const theFonduTacosImg = new Image();
  theFonduTacosImg.src = theFonduTacos;
  theFonduTacosImg.style.margin = ""

  const theFonduTacosName = document.createElement("h2");
  theFonduTacosName.textContent = "Thefondu Tacos";

  const TheFonduTacosDesc = document.createElement("p");
  TheFonduTacosDesc.textContent = "Embark on a flavor adventure with \"theFondu Tacos\" - a tantalizing blend of melted cheese goodness and savory fillings, redefining taco indulgence! Melt your taste buds away with every bite.";

  const theFonduTacosPrice = document.createElement("p");
  theFonduTacosPrice.textContent = "6$";

  const sidesHeading = document.createElement("h2");
  sidesHeading.textContent = "SIDES";
  sidesHeading.classList.add("menu-headings");

  const sidesContainerCards = document.createElement("div");
  sidesContainerCards.classList.add("menu-container-cards");

  const sidesCardContainer = document.createElement("div");
  sidesCardContainer.classList.add("menu-card-container");

  const friesTheBaseImg = new Image();
  friesTheBaseImg.src = friesTheBase;
  friesTheBaseImg.style.margin = "20px 0";

  const friesTheBaseName = document.createElement("h2");
  friesTheBaseName.textContent = "Fries, theBase";

  const friesTheBaseDesc = document.createElement("p");
  friesTheBaseDesc.textContent = "Elevating your taste buds with perfectly seasoned and crispy French fries, the ultimate comfort food.";

  const friesTheBasePrice = document.createElement("p");
  friesTheBasePrice.textContent = "2$";

  const sidesCardContainer2 = document.createElement("div");
  sidesCardContainer2.classList.add("menu-card-container");

  const friesNBaconImg = new Image();
  friesNBaconImg.src = friesNBacon;
  friesNBaconImg.style.marginTop = "-30px";

  const friesNBaconName = document.createElement("h2");
  friesNBaconName.textContent = "Fries'n Bacon";

  const friesNBaconDesc = document.createElement("p");
  friesNBaconDesc.textContent = "A scrumptious indulgence, combining the irresistible flavors of crispy French fries with savory, smoky bacon, delivering a delightful fusion that guarantees a taste sensation like no other.";

  const friesNBaconPrice = document.createElement("p");
  friesNBaconPrice.textContent = "3.50$";

  const sidesCardContainer3 = document.createElement("div");
  sidesCardContainer3.classList.add("menu-card-container");

  const friesNCheeseImg = new Image();
  friesNCheeseImg.src = friesNCheese;
  friesNCheeseImg.style.margin = "10px 0";

  const friesNCheeseName = document.createElement("h2");
  friesNCheeseName.textContent = "Fries'n Cheese";

  const friesNCheeseDesc = document.createElement("p");
  friesNCheeseDesc.textContent = "A delightful combo of golden fries smothered in a rich, gooey cheese sauce, creating an irresistible treat for cheese lovers.";

  const friesNCheesePrice = document.createElement("p");
  friesNCheesePrice.textContent = "2.50$";

  const drinksHeading = document.createElement("h2");
  drinksHeading.textContent = "DRINKS";
  drinksHeading.classList.add("menu-headings");

  const drinksContainerCards = document.createElement("div");
  drinksContainerCards.classList.add("menu-container-cards");

  const drinksCardContainer = document.createElement("div");
  drinksCardContainer.classList.add("menu-card-container");

  const oasisImg = new Image();
  oasisImg.src = oasis;

  const oasisName = document.createElement("h2");
  oasisName.textContent = "Oasis";

  const oasisDesc = document.createElement("p");
  oasisDesc.textContent = "The tropical 🌊";

  const oasisPrice = document.createElement("p");
  oasisPrice.textContent = "1$";

  const drinksCardContainer2 = document.createElement("div");
  drinksCardContainer2.classList.add("menu-card-container");

  const schweppesImg = new Image();
  schweppesImg.src = schweppes;
  schweppesImg.style.width = "60%";
  schweppesImg.style.margin = "-40px 0";

  const schweppesName = document.createElement("h2");
  schweppesName.textContent = "Schweppes";

  const schweppesDesc = document.createElement("p");
  schweppesDesc.textContent = "The Chill 🤙";

  const schweppesPrice = document.createElement("p");
  schweppesPrice.textContent = "1$";

  cardContainer.append(basicTacosImg, basicTacosName, basicTacosDesc, basicTacosPrice);
  cardContainer2.append(theBurgurTacosImg, theBurgurTacosName, theBurgurTacosDesc, theBurgurTacosPrice);
  cardContainer3.append(theFonduTacosImg, theFonduTacosName, TheFonduTacosDesc, theFonduTacosPrice);

  sidesCardContainer.append(friesTheBaseImg, friesTheBaseName, friesTheBaseDesc, friesTheBasePrice);
  sidesCardContainer2.append(friesNBaconImg, friesNBaconName, friesNBaconDesc, friesNBaconPrice);
  sidesCardContainer3.append(friesNCheeseImg, friesNCheeseName, friesNCheeseDesc, friesNCheesePrice);

  drinksCardContainer.append(oasisImg, oasisName, oasisDesc, oasisPrice);
  drinksCardContainer2.append(schweppesImg, schweppesName, schweppesDesc, schweppesPrice);

  drinksContainerCards.append(drinksCardContainer, drinksCardContainer2);
  sidesContainerCards.append(sidesCardContainer, sidesCardContainer2, sidesCardContainer3);
  containerCards.append(cardContainer, cardContainer2, cardContainer3);
  blendContentBg.append(menuHeading, containerCards, sidesHeading, sidesContainerCards, drinksHeading, drinksContainerCards);
  return menuContent;
}