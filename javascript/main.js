const loadHeader = () => {
    let headerxhttp = new XMLHttpRequest();
    headerxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("header-placeholder").innerHTML =
                this.responseText;
        }
    };
    var footerxhttp = new XMLHttpRequest();
    footerxhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("footer-placeholder").innerHTML =
                this.responseText;
        }
    };
    headerxhttp.open("GET", "/html/header.html", true);
    headerxhttp.send();
    footerxhttp.open("GET", "/html/footer.html", true);
    footerxhttp.send();
};
loadHeader();
