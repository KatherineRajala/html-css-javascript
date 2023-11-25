var startUpDiv = document.getElementById('start-up-animation');
var navBar = document.getElementsByClassName('navigation-bar');
var section = document.getElementsByClassName('sections');

function fadeOutOnScroll(element) {
    if (!element) {
        return;
    }

    var distToTop = window.scrollY + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;

    var opacity = 1;

    if (scrollTop > distToTop) {
        opacity = 1 - (scrollTop - distToTop) / elementHeight;
    }

    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

function fadeInOnScroll(startUp, navigationBar, section) {
    if(!startUp && !navigationBar && !section) {
        return;
    }

    if (startUp.style.opacity < 0.09) {
        var opacity = 1 - 1.5 * startUp.style.opacity;

        for (var i = 0; i < navigationBar.length; i++) {
            navigationBar[i].style.opacity = opacity;
        }

        for (var i = 0; i < section.length; i++) {
            section[i].style.opacity = opacity;
        }
    }
    else {
        for (var i = 0; i < navigationBar.length; i++) {
            navigationBar[i].style.opacity = 1 - startUpDiv.style.opacity;
            navigationBar[i].style.position = "absolute";
            navigationBar[i].style.top = "";
        }
    }

    if (startUp.style.opacity < 0.06) {
        for (var i = 0; i < navigationBar.length; i++) {
            navigationBar[i].style.opacity = 1;
            navigationBar[i].style.position = "sticky";
            navigationBar[i].style.top = 0;
        }

        for (var i = 0; i < section.length; i++) {
            section[i].style.opacity = 1;
        }
    }
}

function scrollHandler() {
    fadeOutOnScroll(startUpDiv);
    fadeInOnScroll(startUpDiv, navBar, section);
}

document.addEventListener('scroll', scrollHandler);