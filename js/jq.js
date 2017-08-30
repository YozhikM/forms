$('.select').on('click', function() {
    $('.options').toggleClass('active__options');
});
$('.options a').on('click', function() {
    var year = $(this).text();
    $('.select h3').text(year);
    $('.select h3').css('font-weight', 400);
    $('.select h3').css('font-size', '1.1em');
    $('.select h3').css('color', 'black');
    $('.options').toggleClass('active__options');
    $('.select img').css('left', '34%');
});
$('.info input').blur(function() {
    if (!$(this).val()) {
        return;
    } else {
        var inputVal = $(this).val();
        $(this).next().css('opacity', 0);
    }
});
$('.info input').focus(function() {
    $(this).next().css('opacity', 1);
});