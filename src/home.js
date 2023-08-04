import Icon from "./components/assets/base-tacos2.png";
import otherIcon from "./components/assets/tacos-restaurant2.jpg";

export default function addHomeContent() {
  const homeContent = document.querySelector("#content");

  const contentBg = document.createElement("div");
  contentBg.classList.add("content-bg");
  homeContent.appendChild(contentBg);

  const sloganContainer = document.createElement("div");
  sloganContainer.classList.add("slogan-container");

  const descBg = new Image();
  descBg.src = Icon;

  const slogan = document.createElement("h2");
  slogan.innerHTML = "Unleash the Flavor Fiesta:<br> Tacos Galore!";

  const leftDivRotation = document.createElement("div");
  leftDivRotation.classList.add("left-div-rotation");

  const descContainer = document.createElement("div");
  descContainer.classList.add("desc-container");

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome to Sachet";

  const descP = document.createElement("p");
  descP.innerHTML = "- where authentic flavors meet modern innovation! Nestled in the heart of the bustling city, our tacos restaurant promises a delightful culinary journey that tantalizes your taste buds and leaves you craving for more.";

  const availableHoursAd = document.createElement("h2");
  availableHoursAd.textContent = "So when are we available?"

  const hoursCardContainer = document.createElement("div");
  hoursCardContainer.classList.add("card-container");
  hoursCardContainer.classList.add("hours-container");

  const hoursHeading = document.createElement("h3");
  hoursHeading.textContent = "Hours";

  const hoursTableContainer = addHoursTable();
  const locationAd = document.createElement("h2");
  locationAd.textContent = "Oh, and our location?";

  const locationCardContainer = document.createElement("div");
  locationCardContainer.classList.add("card-container");
  locationCardContainer.classList.add("location-container");

  const locationHeading = document.createElement("h3");
  locationHeading.textContent = "Location";

  const locationMapContainer = document.createElement("div");
  locationMapContainer.classList.add("location-map-container");

  const locationMap = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410252477!2d2.2919063755032725!3d48.858373600708994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1691014322117!5m2!1sfr!2sfr\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
  locationMapContainer.innerHTML += locationMap;

  const locationDesc = document.createElement("p");
  locationDesc.textContent = "Tour Eiffel, 15 Avenue Anatole France, Paris";
  locationMapContainer.appendChild(locationDesc);

  const menuFooterContainer = document.createElement("div");
  menuFooterContainer.classList.add("menu-footer-container");

  const restaurantImg = new Image();
  restaurantImg.src = otherIcon;

  const menuFooterLink = document.createElement("a");
  menuFooterLink.textContent = "CHECK THE MENU!";
  menuFooterLink.classList.add("menu-footer-link");

  sloganContainer.append(descBg, slogan, leftDivRotation);
  hoursCardContainer.append(hoursHeading, document.createElement("hr"), hoursTableContainer);
  locationCardContainer.append(locationHeading, locationMapContainer);
  descContainer.append(h2, descP, availableHoursAd, hoursCardContainer, locationAd, locationCardContainer);
  menuFooterContainer.append(restaurantImg, menuFooterLink);
  contentBg.append(sloganContainer, descContainer, menuFooterContainer);

  menuFooterLink.addEventListener("click", () => {
    homeContent.setAttribute("data-index", "2");
  })

  return homeContent;
}

function addHoursTable() {
  const hoursTableContainer = document.createElement("div");
  hoursTableContainer.classList.add("hours-table-container");

  const mondayDiv = document.createElement("div");
  mondayDiv.textContent = "Monday";
  mondayDiv.classList.add("hoursTh");
  const tuesdayDiv = document.createElement("div");
  tuesdayDiv.textContent = "Tuesday";
  tuesdayDiv.classList.add("hoursTh");
  const wednesdayDiv = document.createElement("div");
  wednesdayDiv.textContent = "Wednesday";
  wednesdayDiv.classList.add("hoursTh");
  const thursdayDiv = document.createElement("div");
  thursdayDiv.textContent = "Tuesday";
  thursdayDiv.classList.add("hoursTh");
  const fridayDiv = document.createElement("div");
  fridayDiv.textContent = "Friday";
  fridayDiv.classList.add("hoursTh");
  const saturdayDiv = document.createElement("div");
  saturdayDiv.textContent = "Saturday";
  saturdayDiv.classList.add("hoursTh");
  const sundayDiv = document.createElement("div");
  sundayDiv.textContent = "Sunday";
  sundayDiv.classList.add("hoursTh");
  const availableAtDiv = document.createElement("div");
  availableAtDiv.textContent = "Available at";
  availableAtDiv.classList.add("hoursTh");
  const mondayAvDiv = document.createElement("div");
  mondayAvDiv.textContent = "6am - 6pm";
  const tuesdayAvDiv = document.createElement("div");
  tuesdayAvDiv.textContent = "6am - 6pm";
  const wednesdayAvDiv = document.createElement("div");
  wednesdayAvDiv.textContent = "6am - 6pm";
  const thursdayAvDiv = document.createElement("div");
  thursdayAvDiv.textContent = "6am - 10pm";
  const fridayAvDiv = document.createElement("div");
  fridayAvDiv.textContent = "6am - 10pm";
  const saturdayAvDiv = document.createElement("div");
  saturdayAvDiv.textContent = "8am - 10pm";
  const sundayAvDiv = document.createElement("div");
  sundayAvDiv.textContent = "8am - 8pm";

  hoursTableContainer.append(mondayDiv, tuesdayDiv, wednesdayDiv, thursdayDiv, fridayDiv, saturdayDiv, sundayDiv, availableAtDiv, mondayAvDiv, tuesdayAvDiv, wednesdayAvDiv, thursdayAvDiv, fridayAvDiv, saturdayAvDiv, sundayAvDiv);
  return hoursTableContainer;
}