import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateQuote() {

    let firstQuoteLine = document.querySelector('#quote-rst-line');
    let secondQuoteLine = document.querySelector('#quote-snd-line');
    let thirdQuoteLine = document.querySelector('#quote-trd-line');
    let authorQuote = document.querySelector('#quote-author');

    let animateQuote = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            trigger: '.quote-panel',
            start: 'center bottom',
            toggleActions: "play pause restart reverse"
        }
    });

    animateQuote.from(
        firstQuoteLine,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0
        }
    ).from(
        secondQuoteLine,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0
        },
        '>'
    ).from(
        thirdQuoteLine,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0
        },
        '>'
    ).from(
        authorQuote,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0
        },
        '<'
    )
}

export default animateQuote