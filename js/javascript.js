$(document).ready( function () {

    $(`.main_btna, .main_btn, a[href="#sheldure"]`).click (function (){
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);

    });

    $ ('.close').click (function (){
        $('.overlay').fadeOut(1000);
        $('.modal').slideToggle(1000);
    });

});

// $(document).ready(function() {

//     $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
//         $('.overlay').fadeIn(1000);
//         $('.modal').slideDown(1000);
//     });

//     $('.close').click(function() {
//         $('.modal').slideUp(1000);
//         $('.overlay').fadeOut(1000);
//     });

// });