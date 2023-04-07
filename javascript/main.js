//Details of pages, helps making nav, (NOTE: 2 paths one for localhost and the other for git hub pages)
const pageDetails = [
    {
        title: "Home",
        localPath: "/",
        ghPagesPath: "/AT3_Website_Howells_467957957/",
    },
    {
        title: "About",
        localPath: "/html/about.html",
        ghPagesPath: "/AT3_Website_Howells_467957957/html/about.html",
    },
    {
        title: "Classes",
        localPath: "/html/classes.html",
        ghPagesPath: "/AT3_Website_Howells_467957957/html/classes.html",
    },
    {
        title: "Contact us",
        localPath: "/html/form.html",
        ghPagesPath: "/AT3_Website_Howells_467957957/html/form.html",
    },
    {
        title: "Privacy",
        localPath: "/html/privacy.html",
        ghPagesPath: "/AT3_Website_Howells_467957957/html/privacy.html",
    },
];
//Removes dumbbell animation to the span elements.
const removeButtonSpanDumbbell = () => {
    const menuButton = document.getElementById("menu-button");
    const menuSpans = menuButton.childNodes;
    menuSpans.forEach((span, i) => {
        span.classList.remove(`menu-button-span-${i}`);
    });
};
//Runs dumbbell animation to the span elements.
const toggleMenuSpanDumbbell = () => {
    const menuButton = document.getElementById("menu-button");
    const menuSpans = menuButton.childNodes;
    menuSpans.forEach((span, i) => {
        if (span.classList.contains(`menu-button-span-${i}`)) {
            span.classList.remove(`menu-button-span-${i}`);
        } else {
            span.classList.add(`menu-button-span-${i}`);
        }
    });
};
//Hide navigation
const hideNav = () => {
    const navList = document.querySelector(".nav-list");
    if (navList.classList.contains("show-mobile-nav")) {
        navList.classList.remove("show-mobile-nav");
        removeButtonSpanDumbbell();
    }
};
//Show/hide navigation menu (also runs dumbbell animation to the span elements)
const toggleNavDisplay = (e) => {
    const navList = document.querySelector(".nav-list");
    e.stopPropagation();
    navList.classList.toggle("show-mobile-nav");
    toggleMenuSpanDumbbell();
};
//Creates a dynamic Header with nav across multiply pages
const createHeader = () => {
    const header = document.getElementById("page-header");
    const logoContainer = document.createElement("section");
    logoContainer.setAttribute("class", "logo-container");
    const homeLinkHeart = document.createElement("a");
    homeLinkHeart.setAttribute(
        "href",
        `${
            window.location.origin === "https://sirjamo1.github.io"
                ? "/AT3_Website_Howells_467957957/"
                : "/"
        }`
    );
    const heartLogo = document.createElement("span");
    heartLogo.setAttribute("class", "heart-logo");
    homeLinkHeart.appendChild(heartLogo);
    logoContainer.appendChild(homeLinkHeart);
    const logoTitle = document.createElement("h4");
    logoTitle.appendChild(document.createTextNode("ML Strength"));
    logoContainer.appendChild(logoTitle);
    const logoSubTitle = document.createElement("h5");
    logoSubTitle.appendChild(document.createTextNode("Pump your heart!"));
    logoContainer.appendChild(logoSubTitle);
    header.appendChild(logoContainer);
    const navContainer = document.createElement("nav");
    navContainer.setAttribute("role", "navigation");
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menu-button");
    menuButton.setAttribute("title", "Open navigation links");
    menuButton.addEventListener("click", (e) => toggleNavDisplay(e));
    for (let i = 0; i < 3; i += 1) {
        const hamburgerSpan = document.createElement("span");
        menuButton.appendChild(hamburgerSpan);
    }
    navContainer.appendChild(menuButton);
    const navList = document.createElement("ul");
    navList.setAttribute("class", "nav-list");
    pageDetails.forEach((page) => {
        const list = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.setAttribute(
            "href",
            `${
                window.location.origin === "https://sirjamo1.github.io"
                    ? page.ghPagesPath
                    : page.localPath
            }`
        );

        navLink.appendChild(document.createTextNode(`${page.title}`));
        if (
            window.location.pathname === page.ghPagesPath ||
            window.location.pathname === page.localPath
        ) {
            navLink.setAttribute("class", "display-dumbbell");
        }
        list.appendChild(navLink);
        navList.appendChild(list);
    });
    navContainer.appendChild(navList);
    header.appendChild(navContainer);
    document.addEventListener("click", hideNav);
};
//Creates a dynamic Footer across multiply pages.
const createFooter = () => {
    const footerContainer = document.getElementById("page-footer");
    const leftContainer = document.createElement("div");
    const companyText = document.createElement("p");
    companyText.innerHTML = `ML Strength &copy ${new Date().getFullYear()}`;
    leftContainer.appendChild(companyText);
    const w3AALink = document.createElement("a");
    w3AALink.setAttribute("href", "https://www.w3.org/WAI/WCAG2AA-Conformance");
    w3AALink.setAttribute(
        "title",
        "Explanation of WCAG 2 Level AA conformance"
    );
    w3AALink.setAttribute("target", "_blank");
    const w3AAImage = document.createElement("img");
    w3AAImage.setAttribute("height", "32");
    w3AAImage.setAttribute("width", "88");
    w3AAImage.setAttribute("src", "https://www.w3.org/WAI/WCAG21/wcag2.1AA-v");
    w3AAImage.setAttribute(
        "alt",
        "Level AA conformance, W3C WAI Web Content Accessibility Guidelines 2.1"
    );

    w3AALink.appendChild(w3AAImage);
    leftContainer.appendChild(w3AALink);
    footerContainer.appendChild(leftContainer);
    const rightContainer = document.createElement("div");
    const githubLink = document.createElement("a");
    githubLink.setAttribute(
        "href",
        "https://github.com/sirjamo1/AT3_Website_Howells_467957957"
    );
    githubLink.setAttribute("target", "_blank");
    const githubLogo = document.createElement("img");
    githubLogo.setAttribute(
        "src",
        `${
            window.location.origin === "https://sirjamo1.github.io"
                ? "/AT3_Website_Howells_467957957/images/github-mark-white.png"
                : "../images/github-mark-white.png"
        }`
    );
    githubLogo.setAttribute("alt", "Github logo");
    githubLink.appendChild(githubLogo);
    githubLogo.setAttribute("height", "32");
    githubLogo.setAttribute("width", "32");
    rightContainer.appendChild(githubLink);
    const developerText = document.createElement("p");
    developerText.appendChild(
        document.createTextNode("James Howells #467957957")
    );
    rightContainer.appendChild(developerText);
    footerContainer.appendChild(rightContainer);
};
//Adds and removes classes from elements to show the correct classes table and classes button.
const showClassTable = (classesButtons, i) => {
    for (let j = 0; j < classesButtons.length; j += 1) {
        classesButtons[j].classList.remove("classes-button-selected");
        const tableToRemoveClass = document.getElementsByClassName(
            `${classesButtons[j].id}-container`
        );
        tableToRemoveClass[0].classList.remove("show-classes-table");
    }
    classesButtons[i].classList.add("classes-button-selected");
    const tableContainer = document.getElementsByClassName(
        `${classesButtons[i].id}-container`
    );
    tableContainer[0].classList.toggle("show-classes-table");
};
// Adds click listeners to classes buttons (on classes.html page).
const addListenersToClassButtons = () => {
    const classesButtons = document.getElementsByClassName("classes-button");
    for (let i = 0; i < classesButtons.length; i += 1) {
        classesButtons[i].addEventListener("click", () =>
            showClassTable(classesButtons, i)
        );
    }
};
//Sanitises string inputs.
const sanitiseString = (str) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
//Sanitises number inputs.
const sanitiseNumber = (num) => {
    return num.replace(/[^0-9]/g, "");
};
// Get's form inputs values and runs them through the above sanitisers before submitting the form.
const sanitiseInput = (form, e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
        const value = input.value.trim();
        const sanitisedValue =
            input.type === "number" ||
            input.type === "tel" ||
            input.type === "postcode"
                ? sanitiseNumber(value)
                : sanitiseString(value);
        input.value = sanitisedValue;
    });
    form.submit();
};
//Add listener to form.
const attachFormSanitiserListener = () => {
    const form = document.getElementById("contact-form");
    if (!!form) form.addEventListener("submit", (e) => sanitiseInput(form, e));
};
//Changes the form help video to the appropriate video.
const changeFormHelpVideo = () => {
    const formHelpVideo = document.querySelector(".form-help-video");
    const formVideoSource = document.getElementById("form-video-source");
    formVideoSource.setAttribute(
        "src",
        `${
            screen.width > 500
                ? "../videos/screen-capture-desktop.mp4"
                : "../videos/screen-capture-mobile.mp4"
        }`
    );
    formHelpVideo.load();
};
createHeader();
createFooter();
addListenersToClassButtons();
attachFormSanitiserListener();

const formQuestionLink = document.getElementsByClassName("form-link");
// Toggle form help video from desktop to mobile
if (!!formQuestionLink.length)
    formQuestionLink[0].addEventListener("mouseover", () =>
        changeFormHelpVideo()
    );

// Remove show-mobile-nav class (if it was open when resizing screen)
window.addEventListener("resize", () => {
    const navList = document.querySelector(".nav-list");
    if (document.body.clientWidth >= 500) hideNav();
});
