import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function changeLinkColor() {

    let capLetters = document.querySelectorAll('.header-nav a .header-cap-letr');

    gsap.to(
        capLetters,
        {
            scrollTrigger: {
                // markers: true,
                trigger: '#cerimonia',
                start: 'center bottom',
                toggleActions: "play pause restart reverse"
            },
            color: '#9d7f84',
            duration: 1
        }
    );
}

export default changeLinkColor