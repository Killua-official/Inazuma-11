$(document).ready(function() {
    let maxHeight = 0;
    let $cards = $('.card');
    $cards.each(function() {
        let cardHeight = $(this).height();
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });
    $cards.height(maxHeight);
});


