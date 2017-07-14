$(document).ready(function(){
    $("#top").owlCarousel({
        autoWidth:true,
        loop:true,
        margin:20,
        items:4,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:3,
                nav:true
            },
            992:{
                items:4,
                nav:true,
            }
        }
    });
});



var $form = $('<form>',{ id: "form", method:"post"});
var $lName = $('<label for="name" class="lang" key="label name">Your login:</label>');
var $name = $('<input>', { id: "name", type: "name", value: "" });
var $lPassword = $('<label for="password" class="lang" key="label password">Your password:</label>');
var $password = $('<input>', { id: "password", type: "text", value: "" });
var $submit = $('<input>', { id: "submit", type: "submit", value: "Send", class: "lang", key:"submit" });
$form.append($lName);
$form.append($name);
$form.append($lPassword);
$form.append($password);
$form.append($submit);
$('#form-container').html($form);




$(function(){
    $('form').sisyphus({timeout: 5});
});



