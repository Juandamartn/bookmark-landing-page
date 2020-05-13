var headerMenu = document.getElementById('header__nav'),
    headerHamburger = document.getElementById('header__hamburger'),
    featuresButton = document.getElementById('features__more-info'),
    headerClose = document.getElementById('header__mobile__close'),
    headerItems = document.querySelectorAll('.header__nav ul li');

var featItem = [
    document.querySelector('#featItem01'),
    document.querySelector('#featItem02'),
    document.querySelector('#featItem03')
]

var featBackground = document.getElementById('description__background__image'),
    featTitle = document.getElementById('features__title'),
    featDescription = document.getElementById('features__description'),
    featSelected = document.querySelector('.featSelected');

if (window.screen.width <= 768) {
    headerMenu.classList.toggle('hidden');
    headerHamburger.classList.toggle('hidden');
    document.querySelector('.header__nav__mobile').classList.toggle('hidden');
    document.querySelector('.header__nav__social').classList.toggle('hidden');
}

if (window.screen.width > 768) {
    document.querySelector('#features__more-info').classList.toggle('hidden');
}

headerHamburger.addEventListener('click', function () {
    headerMenu.style.height = '100vh';
    headerMenu.classList.toggle('hidden');
});

headerClose.addEventListener('click', function () {
    headerMenu.classList.toggle('hidden');
});

// Features section

function featureTab(tab) {
    if (featItem[0].classList.contains('featSelected')) {
        featItem[0].classList.toggle('featSelected');
    } else if (featItem[1].classList.contains('featSelected')) {
        featItem[1].classList.toggle('featSelected');
    } else if (featItem[2].classList.contains('featSelected')) {
        featItem[2].classList.toggle('featSelected');
    }

    tab.classList.toggle('featSelected');

    switch (tab.id) {
        case 'featItem01':
            document.querySelector('.description__background__circle').style.width = '42%';
            featBackground.setAttribute('src', '../images/illustration-features-tab-1.svg');
            featTitle.innerHTML = 'Bookmark in one click';
            featDescription.innerHTML = 'Organize your bookmarks however you like.Our simple drag - and - drop interface gives you complete control over how you manage your favourite sites.';

            break;

        case 'featItem02':
            document.querySelector('.description__background__circle').style.width = '34%';
            document.querySelector('.description__background__circle').style.transform = 'translateY(-90%)';
            featBackground.setAttribute('src', '../images/illustration-features-tab-2.svg');
            featTitle.innerHTML = 'Intelligent search';
            featDescription.innerHTML = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';

            break;

        case 'featItem03':
            document.querySelector('.description__background__circle').style.width = '34%';
            document.querySelector('.description__background__circle').style.transform = 'translateY(-90%)';
            featBackground.setAttribute('src', '../images/illustration-features-tab-3.svg');
            featTitle.innerHTML = 'Share your bookmarks';
            featDescription.innerHTML = 'Easily share your bookmarks and collections with others.Create a shareable link that you can send at the click of a button.';

            break;

        default:

            break;
    }
}

// Showing answers function

function showAnswer(tab) {
    document.querySelector('#dItem0' + tab.id).classList.toggle('hidden');

    if (document.querySelector('#dItem0' + tab.id).classList.contains('hidden')) {
        document.querySelector('#arrow0' + tab.id).src = '../images/icon-arrow.svg';
        document.querySelector('#arrow0' + tab.id).style.transform = 'rotate(0deg)';
    } else {
        document.querySelector('#arrow0' + tab.id).src = '../images/icon-arrow-up.svg';
        document.querySelector('#arrow0' + tab.id).style.transform = 'rotate(180deg)';
    }
}

function closeMenu() {
    if (window.screen.width <= 768) {
        headerMenu.classList.toggle('hidden');
    }
}