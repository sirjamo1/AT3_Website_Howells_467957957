const createHeader = () => {
    const toggleNavDisplay = (e) => {
     e.stopPropagation()
        navList.classList.toggle("show-mobile-nav");
    };
    const header = document.getElementById("header-placeholder");
    const logoContainer = document.createElement("article");
    logoContainer.setAttribute("class", "logo-container");
    const heartHomeLink = document.createElement("a");
    heartHomeLink.setAttribute("href", "/index.html");
    const heartLogo = document.createElement("span");
    heartLogo.setAttribute("class", "heart-logo");
    heartHomeLink.appendChild(heartLogo);
    logoContainer.appendChild(heartHomeLink);
    const logoTitle = document.createElement("h4");
    logoTitle.appendChild(document.createTextNode("ABC GYMS"));
    logoContainer.appendChild(logoTitle);
    const logoSubTitle = document.createElement("h5");
    logoSubTitle.appendChild(document.createTextNode("Pump your heart!"));
    logoContainer.appendChild(logoSubTitle);
    header.appendChild(logoContainer);
    const navContainer = document.createElement("nav");
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menu-button");
    menuButton.setAttribute("title", "Open navigation links");
    menuButton.addEventListener("click", (e) => toggleNavDisplay(e));
    for (let i = 0; i < 3; i += 1) {
        const hamburgerSpan = document.createElement("span");
        hamburgerSpan.addEventListener("click", toggleNavDisplay);
        menuButton.appendChild(hamburgerSpan);
    }
    navContainer.appendChild(menuButton);
    const navList = document.createElement("ul");
    navList.setAttribute("class", "nav-list");
    const listItemHome = document.createElement("li");
    const listLinkHome = document.createElement("a");
    listLinkHome.setAttribute("href", "/index.html");
    listLinkHome.appendChild(document.createTextNode("Home"));
    listItemHome.appendChild(listLinkHome);
    navList.appendChild(listItemHome);
    const listItemAbout = document.createElement("li");
    const listLinkAbout = document.createElement("a");
    listLinkAbout.setAttribute("href", "../html/about.html");
    listLinkAbout.appendChild(document.createTextNode("About"));
    listItemAbout.appendChild(listLinkAbout);
    navList.appendChild(listItemAbout);
    const listItemSportsServices = document.createElement("li");
    const listLinkSportsServices = document.createElement("a");
    listLinkSportsServices.setAttribute("href", "../html/sportsservices.html");
    listLinkSportsServices.appendChild(
        document.createTextNode("Sports Services")
    );
    listItemSportsServices.appendChild(listLinkSportsServices);
    navList.appendChild(listItemSportsServices);
     const listItemForm = document.createElement("li");
     const listLinkForm = document.createElement("a");
     listLinkForm.setAttribute("href", "../html/form.html");
     listLinkForm.appendChild(
         document.createTextNode("Book an appointment")
     );
     listItemForm.appendChild(listLinkForm);
     navList.appendChild(listItemForm);
      const listItemPrivacy = document.createElement("li");
      const listLinkPrivacy = document.createElement("a");
      listLinkPrivacy.setAttribute("href", "../html/privacy.html");
      listLinkPrivacy.appendChild(document.createTextNode("Privacy"));
      listItemPrivacy.appendChild(listLinkPrivacy);
      navList.appendChild(listItemPrivacy);
    navContainer.appendChild(navList);
    header.appendChild(navContainer);
};
createHeader();

const createFooter = () => {
    const footerContainer = document.getElementById("footer-placeholder");
    const leftSection = document.createElement("section");
    const companyText = document.createElement("p");
    companyText.appendChild(document.createTextNode("Company name etc."));
    leftSection.appendChild(companyText);
    footerContainer.appendChild(leftSection);
    const rightSection = document.createElement("section");
    const developerText = document.createElement("p");
    developerText.appendChild(
        document.createTextNode("James Howells #467957957")
    );
    rightSection.appendChild(developerText);
    footerContainer.appendChild(rightSection);
};
createFooter()
//Remove show-mobile-nav class (if it was open when resizing screen)
window.addEventListener("resize", () => {
    const navList = document.getElementsByClassName("nav-list");
    if (
        document.body.clientWidth >= 500 &&
        navList[0].classList.contains("show-mobile-nav")
    ) {
        navList[0].classList.remove("show-mobile-nav");
    }
});
