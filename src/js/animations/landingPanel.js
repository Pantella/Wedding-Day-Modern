import gsap from "gsap";

function animateLandingNames() {

    let nameLeft = document.querySelector('#name-left');
    let nameCenter = document.querySelector('#name-center');
    let nameRight = document.querySelector('#name-right');

    let nameAnimation = gsap.timeline();

    nameAnimation.from(
        nameLeft,
        {
            duration: 2,
            delay: 0,
            ease: 'Power1.easeInOut',
            opacity: 0,
            x: '-20vw'
        }
    ).from(
        nameRight,
        {
            duration: 2,
            delay: 0,
            ease: 'Power1.easeInOut',
            opacity: 0,
            x: '20vw'
        },
        '<'
    ).from(
        nameCenter,
        {
            duration: 1.5,
            ease: 'Power1.easeInOut',
            opacity: 0
        },
        '>'
    );

}

export default animateLandingNames