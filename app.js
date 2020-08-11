let navLis = document.querySelectorAll('.nav-li');
let sections = document.querySelectorAll('.sections');

for (let i=0; i<navLis.length; i++){
    navLis[i].addEventListener('click', function(){
        for (let i=0; i<sections.length; i++){
            sections[i].className = 'sections';
        }
        document.getElementById(this.dataset.id).className = 'sections active';

        for (let i=0; i<navLis.length; i++){
            navLis[i].className = 'nav-li';
        }
        this.className = 'active-nav-li nav-li';
    })
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function toggle() {
    const header = document.querySelector('header');
    header.classList.toggle('MQactive');
}