
const togoContent = document.querySelector(".togo__content");
const togoSlider = document.querySelector(".togo__slider");

const togoBtns = document.querySelector(".togo__btns");
const togoBtn = document.querySelectorAll(".togo__btn");


let DISTANCE_TOGO = 0;

togoContent.addEventListener("click", onClickTogo);
togoBtns.addEventListener("change", onChangetogoBtn);

function onClickTogo(event) {
    const target = event.target;
    const dataset = target.dataset;
    const id = dataset.id;
    console.log(target);
    if (id === undefined) {
        return;
    } else if (id === "right-btn") {
        DISTANCE_TOGO -= 100;
        if (DISTANCE_TOGO < -400) {
            DISTANCE_TOGO = -400;
        }
        togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`);
        switch (DISTANCE_TOGO) {
            case 0:
                togoBtn.forEach(btn=>btn.checked=false);
                togoBtn[0].checked=true;
                break;
            case -100:
                togoBtn.forEach(btn=>btn.checked=false);
                togoBtn[1].checked=true;
                break;
            case -200:
                togoBtn.forEach(btn=>btn.checked=false);
                togoBtn[2].checked=true;
                break;
            case -300:
                togoBtn.forEach(btn=>btn.checked=false);
                togoBtn[3].checked=true;
                break;
            case -400:
                togoBtn.forEach(btn=>btn.checked=false);
                togoBtn[4].checked=true;
                break;
        }
    } else {
        DISTANCE_TOGO += 100;
        if (DISTANCE_TOGO > 0) {
            DISTANCE_TOGO = 0;
        }
        console.log(DISTANCE_TOGO);
        togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`)
        switch (DISTANCE_TOGO) {
            case 0:
                togoBtn.forEach(btn => btn.checked=false);
                togoBtn[0].checked=true;
                break;
            case -100:
                togoBtn.forEach(btn => btn.checked=false);
                togoBtn[1].checked=true;
                break;
            case -200:
                togoBtn.forEach(btn => btn.checked=false);
                togoBtn[2].checked=true;
                break;
            case -300:
                togoBtn.forEach(btn => btn.checked=false);
                togoBtn[3].checked=true;
                break;
            case -400:
                togoBtn.forEach(btn => btn.checked=false);
                togoBtn[4].checked=true;
                break;
        }
    }
}


function onChangetogoBtn(event) {
    const dataset = event.target.dataset;
    const value = dataset.value;
    if (value === undefined) {
        return;
    }
    switch (value) {
        case "slide1":
            DISTANCE_TOGO = 0;
            togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`);
            break;
        case "slide2":
            DISTANCE_TOGO = -100;
            togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`);
            break;
        case "slide3":
            DISTANCE_TOGO = -200;
            togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`);
            break;
        case "slide4":
            DISTANCE_TOGO = -300;
            togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`);
            break;
        case "slide5":
            DISTANCE_TOGO = -400;
            togoSlider.setAttribute("style", `transform: translateX(${DISTANCE_TOGO}%)`);
            break;
        default:
            throw error(`You clicked wrong button`);
    }
}

