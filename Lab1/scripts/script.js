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

    if (startUp.style.opacity < 0.12) {
        var opacity = 1 - 2 * startUp.style.opacity;

        for (var i = 0; i < navigationBar.length; i++) {
            navigationBar[i].style.opacity = opacity;
        }

        for (var i = 0; i < section.length; i++) {
            section[i].style.opacity = opacity;
        }
    }
    else {
        for (var i = 0; i < navigationBar.length; i++) {
            navigationBar[i].style.opacity = 0;
        }
    }

    if (startUp.style.opacity < 0.03) {
        for (var i = 0; i < navigationBar.length; i++) {
            navigationBar[i].style.opacity = 1;
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

/* Button functionality - not using at this time at least
function openPage(pageName, element) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    // Hide all elements with class tabcontent
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();


function plusSlide(n) {
    moveSlide(n);
}

function moveSlide(n) {
    if (n < 0) {
        
    }
}
*/