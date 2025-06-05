// toggal icon navbar

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};





// scroll section link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nabar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    // ............................stiky navbar.............................................................

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    /*===================remove toggle icon and navbar when clik navbar link (scroll)============*/

    menuicon.classList.remove('bx-x')
    navbar.classList.remove('active')

};

/*===================scroll reveal============*/


ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



/*===================typed js============*/   

const typed = new Typed (
    ".multiple-text",{
        strings:["fronted Developer","python programmer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    })




// ==============================================================================



// // Toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Scroll section link
// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('header .navbar a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
//             });
//         }
//     });

//     // Sticky navbar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Remove toggle icon and navbar when clicking navbar link (scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// // Scroll reveal (Add your ScrollReveal settings below)
// ScrollReveal({
//     reset: true,
//     distance: '60px',
//     duration: 2500,
//     delay: 400
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

//     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

//     ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });

//     ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//     /*===================typed js============*/   

// const typed = new Typed (
//     ".multiple-text",{
//         strings:["fronted Developer","backend Developer"],
//         typeSpeed:100,
//         backSpeed:100,
//         backDelay:1000,
//         loop:true
//     })
