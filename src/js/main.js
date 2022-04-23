/* if (module.hot) {
    module.hot.accept();
} */
import {changeLinkColor,toggleNavbarMobile} from './animations/headerNav';
import animateLandingNames from './animations/landingPanel';
import animateFirstCard from './animations/rstCardPanel';
import animateQuote from './animations/quotePanel';
import animateSecondCard from './animations/sndCardPanel';
import animateGallery from './animations/galleryPanel';

document.addEventListener('DOMContentLoaded',init);

function init() {
    toggleNavbarMobile();
    changeLinkColor();
    animateLandingNames();
    animateFirstCard();
    animateQuote();
    animateSecondCard();
    animateGallery();
}