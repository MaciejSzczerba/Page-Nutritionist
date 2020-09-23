let fixed = false;

function addFixed() {
    const menu = document.querySelector('.menu');
    const menuHeight = menu.clientHeight;
    const dietPosition = document.querySelector('.diet').offsetTop;
    let scrollYNumber = window.scrollY;
    let menuPosition = menu.offsetTop;

    console.log(menuPosition);
    console.log(scrollYNumber);
    console.log(dietPosition);

    // if (fixed = true) {
    //     menu.classList.add('fixed');
    // } else if (fixed = false) {
    //     menu.classList.remove('fixed');
    // }


    if (fixed == false && scrollYNumber > menuPosition) {
        fixed = true;
        menu.classList.add('fixed');
    } else if (fixed == true && scrollYNumber < dietPosition) {
        fixed = false
        menu.classList.remove('fixed');
    }


};

window.addEventListener("scroll", addFixed);