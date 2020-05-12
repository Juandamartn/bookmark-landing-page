// Bookmark in one click

// Organize your bookmarks however you like.Our simple drag - and - drop interface
// gives you complete control over how you manage your favourite sites.

// Intelligent search

// Our powerful search feature will help you find saved sites in no time at all.
// No need to trawl through all of your bookmarks.

// Share your bookmarks

// Easily share your bookmarks and collections with others.Create a shareable
// link that you can send at the click of a button.

var headerMenu = document.getElementById('header__nav'),
    headerHamburger = document.getElementById('header__hamburger'),
    featuresButton = document.getElementById('features__more-info'),
    headerClose = document.getElementById('header__mobile__close'),
    headerItems = document.querySelectorAll('.header__nav ul li');

if (window.screen.width <= 425) {
    headerMenu.classList.toggle('hidden');
    headerHamburger.classList.toggle('hidden');
    featuresButton.classList.toggle('hidden');
}

headerHamburger.addEventListener('click', function () {
    headerMenu.style.height = '100vh';
    headerMenu.classList.toggle('hidden');
});

headerClose.addEventListener('click', function () {
    headerMenu.classList.toggle('hidden');
});

function closeMenu() {
    if (window.screen.width <= 425) {
        headerMenu.classList.toggle('hidden');
    }
}