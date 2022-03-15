import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateSecondCard() {

    let image = document.querySelector("#ricevimento .bottom-right-image");
    let card = document.querySelector("#ricevimento .card");

    let animatecard = gsap.timeline({
        scrollTrigger: {
            // markers: true,
            trigger: '#ricevimento',
            start: 'center bottom',
            toggleActions: "play pause restart reverse"
        }
    });

    animatecard.from(
        image,
        {
            duration: 1.5,
            delay: 0.5,
            ease: 'Power1.easeInOut',
            opacity: 0,
            x: '10vw'
        }
    ).from(
        card,
        {
            duration: 1.5,
            ease: 'Power1.easeInOut',
            opacity: 0,
            x: '-10vw'
        },
        '<'
    )
}

export default animateSecondCard