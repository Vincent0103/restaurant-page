export default function addContactContent() {
  const contactContent = document.querySelector("#content");
  const contentBg = document.createElement("div");
  contentBg.classList.add("contact-content-bg");
  contactContent.appendChild(contentBg);

  const contactUsHeading = document.createElement("h1");
  contactUsHeading.textContent = "CONTACT US";

  const tel = document.createElement("h2");
  tel.textContent = "Phones";

  const firstNbDiv = document.createElement("div");
  firstNbDiv.classList.add("first-nb-div");

  const firstNbLabel = document.createElement("label");
  firstNbLabel.setAttribute("for", "first-nb");
  firstNbLabel.textContent = "Local: ";

  const firstNb = document.createElement("p");
  firstNb.setAttribute("id", "first-nb");
  firstNb.textContent = "873-239-2398";


  const secondNbDiv = document.createElement("div");
  secondNbDiv.classList.add("second-nb-div");

  const secondNbLabel = document.createElement("label");
  secondNbLabel.setAttribute("for", "second-nb");
  secondNbLabel.textContent = "Fix: ";

  const secondNb = document.createElement("p");
  secondNb.setAttribute("id", "second-nb")
  secondNb.textContent = "574-240-2404";

  const emailHeading = document.createElement("h2");
  emailHeading.textContent = "Email";

  const emailP = document.createElement("p");
  emailP.textContent = "sachet27@fsure.tui";


  firstNbDiv.append(firstNbLabel, firstNb);
  secondNbDiv.append(secondNbLabel, secondNb);
  contentBg.append(contactUsHeading, tel, firstNbDiv, secondNbDiv, emailHeading, emailP);
}