const containergaleri = document.querySelector('.containergaleri');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

containergaleri.addEventListener('click', function(e) {

    // Cek apakah yang di klik thumb
    if( e.target.className == 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fadee');
        setTimeout(function(){
            jumbo.classList.remove('fadee');
        }, 500);
        // FOREACH
        thumbs.forEach(function(thumb) {
            thumb.className = 'thumb';
        });

        e.target.classList.add('activee');
    }

});