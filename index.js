document.addEventListener('DOMContentLoaded', () => {
    Initialize();
})

const Initialize = () => {
    const SLIDER = document.getElementById('COLOR-SLIDER');

    Resize();

    document.addEventListener('resize', () => Resize());
    document.addEventListener('scroll', () => onScroll());

    SLIDER.oninput = (e) => shiftColor(SLIDER.value);

}

const Resize = () => {
    const SECTIONS = document.getElementsByClassName('section');
    const CONTAINER = document.getElementById('CONTAINER');
    const CONTENT_MAINS = document.getElementsByClassName('content-main');

    const height = window.innerHeight;
    const max_height = SECTIONS.length * height;

    for (let i = 0; i < SECTIONS.length; i++) {
        const element = SECTIONS[i];
        element.style.height = `${height}px`;
    }

    for (let i = 0; i < CONTENT_MAINS.length; i++) {
        const element = CONTENT_MAINS[i];
        element.style.maxHeight = `${height}px`;
        console.log(element);
    }

    CONTAINER.style.height = `${max_height}px`
}

const onScroll = () => {
    const SECTIONS = document.getElementsByClassName('section');

    for (let i = 0; i < SECTIONS.length; i++) {
        if(i != 0){
            const element = SECTIONS[i];

            const rect_top = element.getBoundingClientRect();

            if(rect_top.top == 0){ SECTIONS[i - 1].style.visibility = 'hidden'; }
            else if(SECTIONS[i - 1].style.visibility == 'hidden'){ SECTIONS[i - 1].style.visibility = 'visible'; }
        }

    }
}

const shiftColor = (value) => {
    const ROOT = document.documentElement;
    ROOT.style.setProperty('--color-shift', `${value}deg`);
}