const navBtn = document.querySelector('.nav-btn');
const menu = document.getElementById('menu');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

navBtn.addEventListener('click', function () {
    if (window.innerWidth < 768) {
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            menu.style.display = 'flex';
            overlay.style.display = 'block';
        }
    }
});

document.body.appendChild(overlay);

overlay.addEventListener('click', function () {
    menu.style.display = 'none';
    overlay.style.display = 'none';
});

menu.addEventListener('mouseleave', function () {
    overlay.style.display = 'none';
});

menu.addEventListener('click', function (event) {
    if (window.innerWidth < 1199.98 && (event.target.tagName.toLowerCase() === 'a' || event.target.tagName.toLowerCase() === 'p')) {
        menu.style.display = 'none';
        overlay.style.display = 'none';
    }
});









// const navBtn = document.querySelector('.nav-btn');
// const menu = document.getElementById('menu');
// const overlay = document.createElement('div');
// overlay.classList.add('overlay');

// navBtn.addEventListener('click', function () {
//     if (menu.style.display === 'flex') {
//         menu.style.display = 'none';
//         overlay.style.display = 'none';
//     } else {
//         menu.style.display = 'flex';
//         overlay.style.display = 'block';
//     }
// });

// document.body.appendChild(overlay);

// overlay.addEventListener('click', function () {
//     menu.style.display = 'none';
//     overlay.style.display = 'none';
// });

// menu.addEventListener('mouseleave', function () {
//     overlay.style.display = 'none';
// });



// menu.addEventListener('click', function (event) {
//     if (event.target.tagName.toLowerCase() === 'a' || event.target.tagName.toLowerCase() === 'p') {
//         menu.style.display = 'none';
//         overlay.style.display = 'none';
//     }
// });
