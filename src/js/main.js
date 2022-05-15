/* if (module.hot) {
    module.hot.accept();
} */
import {toggleNavbarMobile} from './animations/headerNav';
import animateLandingNames from './animations/landingPanel';
import animateFirstCard from './animations/rstCardPanel';
import animateQuote from './animations/quotePanel';
import animateSecondCard from './animations/sndCardPanel';
import animateGallery from './animations/galleryPanel';
import animateListaNozze from './animations/listaNozzePanel';

document.addEventListener('DOMContentLoaded',init);

function init() {
    toggleNavbarMobile();
    animateLandingNames();
    animateFirstCard();
    animateQuote();
    animateSecondCard();
    animateGallery();
    animateListaNozze();
}