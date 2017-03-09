//$(document).ready(saluda)

//function saluda() {
//alert($('h1').text())
//}

$(function() {
    //alert($('h1').text())

    //Modificar le DOM.
    //Crear un parrafo nuevo en un objeto jQuery.
    $nuevo = $('<p>Parrafo <b>nuevo</b></p>')

    $('h2').after($nuevo)
    /*$('#boton1').click(function (e) { 
        e.preventDefault();
    });*/
})
