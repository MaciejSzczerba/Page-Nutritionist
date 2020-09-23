const slideList = [{
        img: "img/banner1.jpg",
        header: 'Pierwszy rodzaj',
        description: 'pierwszy rodzaj diety nanana nannanana nananannana nananana nanan annaa'
    },
    {
        img: "img/banner2.jpg",
        header: 'Drugi rodzaj',
        description: 'Drugi rodzaj diety nanana nannanana nananannana nananana nanan annaa'
    },
    {
        img: "img/banner3.jpg",
        header: 'Trzeci rodzaj',
        description: 'Trzeci rodzaj diety nanana nannanana nananannana nananana nanan annaa'
    }
];


const image = document.querySelector(".diet__banner--img");
const title = document.querySelector(".diet__banner--txt--header");
const txt = document.querySelector(".diet__banner--txt--description");
const dots = [...document.querySelectorAll('.diet__banner__dots--dot')];
const time = 3000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active__dot'));
    dots[activeDot].classList.remove('active__dot');
    dots[active].classList.add('active__dot');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0
    }
    image.src = slideList[active].img;
    title.textContent = slideList[active].header;
    txt.textContent = slideList[active].description;
    changeDot();
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? active-- : active++;
        console.log(active);
        if (active === slideList.length) {
            active = 0;
        } else if (active < 0) {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        title.textContent = slideList[active].header;
        txt.textContent = slideList[active].description;
        changeDot();
        indexInterval = setInterval(changeSlide, time);

    }
}

window.addEventListener('keydown', keyChangeSlide);