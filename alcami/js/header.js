// search bar and menu toggle

var shopDropdown = document.getElementsByClassName("link-title")[0];
shopDropdown.addEventListener("click", function () {
    var chevron = document.getElementsByClassName("chevron")[0];
    var dropdown = document.getElementsByClassName("shop-dropdown")[0];
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        dropdown.style.animationName = "fade-in";
        chevron.style.transform = "rotate(180deg)";
    } else {
        dropdown.style.display = "none";
        dropdown.style.animationName = "fade-out";
        chevron.style.transform = "rotate(0deg)";
    }
})

var searchIcon = document.getElementsByClassName("header-search-icon")[0];
searchIcon.addEventListener("click", function () {
    var searchBar = document.getElementsByClassName("search-container")[0];
    var headerLinks = document.getElementsByClassName("header-links")[0];
    if (headerLinks.style.display === "flex") {
        searchBar.style.display = "block";
        headerLinks.style.display = "none"
    } else {
        searchBar.style.display = "none";
        headerLinks.style.display = "flex"
    }
})

// mobile hamburger and menu open and close

var hamburger = document.getElementsByClassName("hamburger")[0];
hamburger.addEventListener("click", function () {
    var menuModal = document.getElementsByClassName("menu-modal")[0];
    menuModal.style.display = "block";
    menuModal.style.animationName = "slide-in"
});

var menuClose = document.getElementsByClassName("menu-close")[0];
menuClose.addEventListener("click", function () {
    var menuModal = document.getElementsByClassName("menu-modal")[0];
    menuModal.style.display = "none";
    menuModal.style.animationName = "slide-out"
})

// mobile search menu open and close

var mobileSearchIcon = document.getElementsByClassName("header-mobile-search-icon")[0];
mobileSearchIcon.addEventListener("click", function () {
    var searchModal = document.getElementsByClassName("search-modal")[0];
    searchModal.style.display = "block";
    searchModal.style.animationName = "slide-in"
});

var searchClose = document.getElementsByClassName("search-close")[0];
searchClose.addEventListener("click", function () {
    var searchModal = document.getElementsByClassName("search-modal")[0];
    searchModal.style.display = "none";
    searchModal.style.animationName = "slide-out"
})