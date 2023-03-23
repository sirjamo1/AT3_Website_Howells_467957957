const pageDetails = [
    {
        title: "Home",
        localPath: "/index.html",
        ghPagesPath: "/AT3_Website_Howells_467957957/index.html",
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

const hideNav = () => {
    const navList = document.querySelector(".nav-list");
    if (navList.classList.contains("show-mobile-nav"))
        navList.classList.remove("show-mobile-nav");
};
const createHeader = () => {
    const toggleNavDisplay = (e) => {
        e.stopPropagation();
        navList.classList.toggle("show-mobile-nav");
    };
    const header = document.getElementsByTagName("header")[0];
    const logoContainer = document.createElement("article");
    logoContainer.setAttribute("class", "logo-container");
    const homeLinkHeart = document.createElement("a");
    homeLinkHeart.setAttribute(
        "href",
        `${
            window.location.origin === "https://sirjamo1.github.io"
                ? "/AT3_Website_Howells_467957957/index.html"
                : "/index.html"
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
    pageDetails.forEach((page) => {
        const list = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.setAttribute(
            "href",
            `${
                window.location.origin === "https://sirjamo1.github.io"
                    ? page.githubLink
                    : page.localPath
            }`
        );
        navLink.appendChild(document.createTextNode(`${page.title}`));
        if (
            window.location.pathname === page.githubLink ||
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
createHeader();

const createFooter = () => {
    const footerContainer = document.getElementsByTagName("footer")[0];
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
createFooter();

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
const addListenersToClassButtons = () => {
    const classesButtons = document.getElementsByClassName("classes-button");
    for (let i = 0; i < classesButtons.length; i += 1) {
        classesButtons[i].addEventListener("click", () =>
            showClassTable(classesButtons, i)
        );
    }
};

function sanitiseString(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitiseNumber(num) {
    return num.replace(/[^0-9]/g, "");
}
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

const attachFormSanitiserListener = () => {
    const form = document.getElementById("contact-form");
    if (!!form) form.addEventListener("submit", (e) => sanitiseInput(form, e));
};

attachFormSanitiserListener();

addListenersToClassButtons();
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
const formQuestionLink = document.getElementsByClassName("form-link");
if (!!formQuestionLink.length)
    formQuestionLink[0].addEventListener("mouseover", () =>
        changeFormHelpVideo()
    );

// Remove show-mobile-nav class (if it was open when resizing screen)
window.addEventListener("resize", () => {
    const navList = document.querySelector(".nav-list");
    if (document.body.clientWidth >= 500) hideNav();
});
