import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateListaNozze() {

    let firstPara = document.querySelector("#lista-first-para");
    let secondPara = document.querySelector("#lista-second-para");
    let thirdPara = document.querySelector("#lista-third-para");
    let fourthPara = document.querySelector("#lista-fourth-para");

    const scrollTrigObj = {
        scrollTrigger: {
            // markers: true,
            trigger: '#lista-nozze',
            start: 'center bottom',
            toggleActions: "play pause restart reverse"
        }
    };

    let animatePara = gsap.timeline(scrollTrigObj);

    animatePara.from(
        firstPara,
        {
            duration: 1.5,
            delay: 0.5,
            ease: 'Power1.easeInOut',
            opacity: 0
        }
    ).from(
        secondPara,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0,
            y: '2.5rem'
        },
        '>'
    ).from(
        thirdPara,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0,
            x: '2.5rem'
        },
        '>'
    ).from(
        fourthPara,
        {
            duration: 1,
            ease: 'Power1.easeInOut',
            opacity: 0,
            x: '-2.5rem'
        },
        '>'
    )
}

export default animateListaNozze;