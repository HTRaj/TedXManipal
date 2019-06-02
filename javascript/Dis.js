$(document).ready(function() {

    function myRepeat() {
        $('#Coming_soon_pic img').delay(1000).fadeOut(2000);
        $('#Coming_soon h1').delay(1000).fadeOut(2000);
    }
    setInterval(myRepeat, 500);
});