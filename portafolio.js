// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/NIDAL01.jpg",
    title: "01 | Nidal",
    about: "Mudador de guaguas transportable para situaciones de emergencia",
}, {
    figure: "media/DMT02.jpg",
    title: "02 | Desde mi tierra",
    about: "Tres textos que enseñan procesos productivos a niños pequeños",
}, {
    figure: "media/WAH03.jpg",
    title: "03 | Wah",
    about: "Marca completa de un snack callejero inspirado en la receta del PadThai",
}, {
    figure: "media/TOGO04.jpg",
    title: "04 | Maggi_To go!",
    about: "Variedad de sopas frías y listas para consumo, bajo la marca Maggi",
}, {
    figure: "media/DATIL05.jpg",
    title: "05 | Dátil",
    about: "Desayuno rápido para niños que se encuentran en movimiento",
}, {
    figure: "media/FANZINE06.jpg",
    title: "06 | Fanzine",
    about: "Se originó gracias al análisis de los perros callejeros del sector de Pío Nono",
}, {
    figure: "media/ESTRUCTURA07.jpg",
    title: "07 | Estructura neumática",
    about: "Intervención en la escuela de diseño, muñeco inflable, movil e interactivo",
}, {
    figure: "media/OPHIC08.jpg",
    title: "08 | Medio audiovisual",
    about: "Promoción para Ophic, closing night de la escuela de diseño 2017",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
