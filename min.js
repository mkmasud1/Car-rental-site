let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('.text',{delay:200, origin:'top'})
sr.reveal('.form_container form',{delay:200, origin:'left'})
sr.reveal('.heading',{delay:200, origin:'top'})
sr.reveal('.ride_container .box',{delay:200, origin:'top'})
sr.reveal('.services_container .box',{delay:200, origin:'top'})
sr.reveal('.about_container .box',{delay:200, origin:'top'})
sr.reveal('.reviews_container',{delay:200, origin:'top'})
sr.reveal('.newsletter .box',{delay:200, origin:'top'})