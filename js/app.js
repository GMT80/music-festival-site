$(document).ready(function() {
    $('#date').countdown('2020/07/10', function(e) {
        $(this).html(e.strftime('<p><span> %D </span> days <span> %H </span> hours <span> %M </span> minutes <span> %S </span> seconds</p>'))
    });

    document.querySelectorAll('.navbar .nav-link').forEach(navLink => {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
           
           document.querySelector( this.getAttribute('href') ).scrollIntoView({
                behavior : 'smooth',
                block : 'start'
           })    
        })
    })
});

window.onscroll = function () {
    let scroll = window.scrollY;

    const navigation = document.querySelector('#main-nav');

    if (scroll > 300) {
       navigation.classList.add('bg-success');
    }
    else {
        navigation.classList.remove('bg-success');
    }
    
}