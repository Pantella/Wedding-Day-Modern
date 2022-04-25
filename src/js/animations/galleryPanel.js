import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateGallery() {

    let firstImage = document.querySelector('#gal-img-1');
    let secondImage = document.querySelector('#gal-img-2');
    let thirdImage = document.querySelector('#gal-img-3');
    let fourthImage = document.querySelector('#gal-img-4');
    let phrase = document.querySelector('#galleria .central-assertion');

    const windoWidth = window.innerWidth;

    let animateImages = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            trigger: '#galleria',
            start: 'center bottom',
            toggleActions: "play pause restart reverse"
        }
    });

    if ( windoWidth>768 ) {
        animateImages.from(
            firstImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            thirdImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            secondImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            fourthImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            phrase,
            {
                duration: 0.8,
                opacity: 0,
                // scale: 0,
                ease: 'Power1.easeInOut'
            }
        )
    } else {
        animateImages.from(
            phrase,
            {
                duration: 0.8,
                opacity: 0,
                // scale: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            firstImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            secondImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            thirdImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        ).from(
            fourthImage,
            {
                duration: 0.8,
                opacity: 0,
                ease: 'Power1.easeInOut'
            }
        )
    }


}

export default animateGallery