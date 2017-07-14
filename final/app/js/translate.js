var arrLang = {
    'en': {
        'cat' : 'Cat',
        'kitty' : 'Kitty'
    },
    'ru': {
        'cat' : 'Кот',
        'kitty' : 'Котёнок'
    }
};

$(function () {
    $('.translate').click(function () {
       var lang = $(this).attr('id');

       $('.language').each(function (index, element) {
           $(this).text(arrLang[lang][$(this).attr('key')]);
       });
    });
});