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
  blendContentBg.appendChild(menuHeading);

  const containerCards = document.createElement("div");
  containerCards.classList.add("menu-container-cards");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("menu-card-container");
  containerCards.appendChild(cardContainer);
  blendContentBg.appendChild(containerCards);

  const basicTacosImg = new Image();
  basicTacosImg.src = basicTacos;
  cardContainer.appendChild(basicTacosImg);

  const basicTacosName = document.createElement("h2");
  basicTacosName.textContent = "Basic Tacos";
  cardContainer.appendChild(basicTacosName);

  const basicTacosDesc = document.createElement("p");
  basicTacosDesc.textContent = "Taste the essence of Mexico in every bite with our Basic Tacos - tender fillings nestled in soft corn tortillas, a fiesta for your taste buds!";
  cardContainer.appendChild(basicTacosDesc);

  const basicTacosPrice = document.createElement("p");
  basicTacosPrice.textContent = "4$";
  cardContainer.appendChild(basicTacosPrice);

  const cardContainer2 = document.createElement("div");
  cardContainer2.classList.add("menu-card-container");
  containerCards.appendChild(cardContainer2);
  blendContentBg.appendChild(containerCards);

  const theBurgurTacosImg = new Image();
  theBurgurTacosImg.src = theBurgurTacos;
  theBurgurTacosImg.style.margin = "30px 0";
  cardContainer2.appendChild(theBurgurTacosImg);

  const theBurgurTacosName = document.createElement("h2");
  theBurgurTacosName.textContent = "Theburgur Tacos";
  cardContainer2.appendChild(theBurgurTacosName);

  const theBurgurTacosDesc = document.createElement("p");
  theBurgurTacosDesc.textContent = "Experience a delightful fusion of flavors with \"theBurgur Tacos\" - where juicy burger-inspired fillings meet the traditional embrace of soft tortillas, a unique twist on taco perfection!";
  cardContainer2.appendChild(theBurgurTacosDesc);

  const theBurgurTacosPrice = document.createElement("p");
  theBurgurTacosPrice.textContent = "7$";
  cardContainer2.appendChild(theBurgurTacosPrice);

  const cardContainer3 = document.createElement("div");
  cardContainer3.classList.add("menu-card-container");
  containerCards.appendChild(cardContainer3);
  blendContentBg.appendChild(containerCards);

  const theFonduTacosImg = new Image();
  theFonduTacosImg.src = theFonduTacos;
  theFonduTacosImg.style.margin = ""
  cardContainer3.appendChild(theFonduTacosImg);

  const theFonduTacosName = document.createElement("h2");
  theFonduTacosName.textContent = "Thefondu Tacos";
  cardContainer3.appendChild(theFonduTacosName);

  const TheFonduTacosDesc = document.createElement("p");
  TheFonduTacosDesc.textContent = "Embark on a flavor adventure with \"theFondu Tacos\" - a tantalizing blend of melted cheese goodness and savory fillings, redefining taco indulgence! Melt your taste buds away with every bite.";
  cardContainer3.appendChild(TheFonduTacosDesc);

  const theFonduTacosPrice = document.createElement("p");
  theFonduTacosPrice.textContent = "6$";
  cardContainer3.appendChild(theFonduTacosPrice);

  const sidesHeading = document.createElement("h2");
  sidesHeading.textContent = "SIDES";
  sidesHeading.classList.add("menu-headings");
  blendContentBg.appendChild(sidesHeading);

  const sidesContainerCards = document.createElement("div");
  sidesContainerCards.classList.add("menu-container-cards");

  const sidesCardContainer = document.createElement("div");
  sidesCardContainer.classList.add("menu-card-container");
  sidesContainerCards.appendChild(sidesCardContainer);
  blendContentBg.appendChild(sidesContainerCards);

  const friesTheBaseImg = new Image();
  friesTheBaseImg.src = friesTheBase;
  friesTheBaseImg.style.margin = "20px 0";
  sidesCardContainer.appendChild(friesTheBaseImg);

  const friesTheBaseName = document.createElement("h2");
  friesTheBaseName.textContent = "Fries, theBase";
  sidesCardContainer.appendChild(friesTheBaseName);

  const friesTheBaseDesc = document.createElement("p");
  friesTheBaseDesc.textContent = "Elevating your taste buds with perfectly seasoned and crispy French fries, the ultimate comfort food.";
  sidesCardContainer.appendChild(friesTheBaseDesc);

  const friesTheBasePrice = document.createElement("p");
  friesTheBasePrice.textContent = "2$";
  sidesCardContainer.appendChild(friesTheBasePrice);

  const sidesCardContainer2 = document.createElement("div");
  sidesCardContainer2.classList.add("menu-card-container");
  sidesContainerCards.appendChild(sidesCardContainer2);

  const friesNBaconImg = new Image();
  friesNBaconImg.src = friesNBacon;
  friesNBaconImg.style.marginTop = "-30px";
  sidesCardContainer2.appendChild(friesNBaconImg);

  const friesNBaconName = document.createElement("h2");
  friesNBaconName.textContent = "Fries'n Bacon";
  sidesCardContainer2.appendChild(friesNBaconName);

  const friesNBaconDesc = document.createElement("p");
  friesNBaconDesc.textContent = "A scrumptious indulgence, combining the irresistible flavors of crispy French fries with savory, smoky bacon, delivering a delightful fusion that guarantees a taste sensation like no other.";
  sidesCardContainer2.appendChild(friesNBaconDesc);

  const friesNBaconPrice = document.createElement("p");
  friesNBaconPrice.textContent = "3.50$";
  sidesCardContainer2.appendChild(friesNBaconPrice);

  const sidesCardContainer3 = document.createElement("div");
  sidesCardContainer3.classList.add("menu-card-container");
  sidesContainerCards.appendChild(sidesCardContainer3);

  const friesNCheeseImg = new Image();
  friesNCheeseImg.src = friesNCheese;
  friesNCheeseImg.style.margin = "10px 0";
  sidesCardContainer3.appendChild(friesNCheeseImg);

  const friesNCheeseName = document.createElement("h2");
  friesNCheeseName.textContent = "Fries'n Cheese";
  sidesCardContainer3.appendChild(friesNCheeseName);

  const friesNCheeseDesc = document.createElement("p");
  friesNCheeseDesc.textContent = "A delightful combo of golden fries smothered in a rich, gooey cheese sauce, creating an irresistible treat for cheese lovers.";
  sidesCardContainer3.appendChild(friesNCheeseDesc);

  const friesNCheesePrice = document.createElement("p");
  friesNCheesePrice.textContent = "2.50$";
  sidesCardContainer3.appendChild(friesNCheesePrice);

  const drinksHeading = document.createElement("h2");
  drinksHeading.textContent = "DRINKS ?";
  drinksHeading.classList.add("menu-headings");
  blendContentBg.appendChild(drinksHeading);

  const drinksContainerCards = document.createElement("div");
  drinksContainerCards.classList.add("menu-container-cards");

  const drinksCardContainer = document.createElement("div");
  drinksCardContainer.classList.add("menu-card-container");
  drinksContainerCards.appendChild(drinksCardContainer);
  blendContentBg.appendChild(drinksContainerCards);

  const oasisImg = new Image();
  oasisImg.src = oasis;
  drinksCardContainer.appendChild(oasisImg);

  const oasisName = document.createElement("h2");
  oasisName.textContent = "Oasis";
  drinksCardContainer.appendChild(oasisName);

  const oasisDesc = document.createElement("p");
  oasisDesc.textContent = "The tropical 🌊";
  drinksCardContainer.appendChild(oasisDesc);

  const oasisPrice = document.createElement("p");
  oasisPrice.textContent = "1$";
  drinksCardContainer.appendChild(oasisPrice);

  const drinksCardContainer2 = document.createElement("div");
  drinksCardContainer2.classList.add("menu-card-container");
  drinksContainerCards.appendChild(drinksCardContainer2);

  const schweppesImg = new Image();
  schweppesImg.src = schweppes;
  schweppesImg.style.width = "60%";
  schweppesImg.style.margin = "-40px 0";
  drinksCardContainer2.appendChild(schweppesImg);

  const schweppesName = document.createElement("h2");
  schweppesName.textContent = "Schweppes";
  drinksCardContainer2.appendChild(schweppesName);

  const schweppesDesc = document.createElement("p");
  schweppesDesc.textContent = "The Chill 🤙";
  drinksCardContainer2.appendChild(schweppesDesc);

  const schweppesPrice = document.createElement("p");
  schweppesPrice.textContent = "1$";
  drinksCardContainer2.appendChild(schweppesPrice);
  return menuContent;
}