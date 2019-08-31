function toggleMenu (menu){
    var statusMenu = $(menu).closest("ul").hasClass("ocult-all")
    if(statusMenu){
        $(menu).closest("ul").removeClass("ocult-all")
    }
    else{
        $(menu).closest("ul").addClass("ocult-all")
    }
}

function goSection (id){
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 'slow')
}

function doScroll (id){
    let nextSection = $(id).closest(".primary-element").next()
    $('html,body').animate({
        scrollTop: $(nextSection).offset().top
    }, 'slow')
}

function doScrollModal (id, modal){
    let nextSection = $(id).closest(".primary-element").next()
    $(modal).animate({
        scrollTop: $(nextSection).offset().top
    }, 'slow')
}

function appendParticles(){
    var particles = "<div class='particle'></div>"
    for(var i=0; i<100; i++){
        $("#particle-container").append(particles)
    }
}

appendParticles()

var arrayMovies = [{
    indice1:{
        cover: 'img/traicioncartel.jpg',
        sinopsis: 'Las fracturas familiares entre Félix y su hija Misela, forjadas incluso antes de su nacimiento. El temperamento impetuoso de ambos provoca que los rencores del pasado y su travesía personal a lo largo de atropelladas vidas moldeé una enfermiza y latente sospecha mutua, '+
        'la cual explota en una tarde nublada mientras lod dos dan un paseo por un terreno roco.',
        youtube: ''
    },
    indice2:{
        cover: 'img/elañodelaplagacartel.jpg',
        sinopsis: 'Tras romper con Irene, los amigos de Victor se empeñan en encontrarle una novia, pero él no quiere olvidarla, incluso cuando aparece Lola. Súbitamente, Irene lo llama, nerviosa, y le pide ayuda porque la gente a su alrededor se comporta de modo diferente, como si hubieran '+
        'perdido sus recuerdos y emociones. Victor decide convertirse en el héroe que nunca fue para Irene y salir en su ayuda.',
        youtube: ''
    },
    indice3:{
        cover: 'img/feralcartel.jpg',
        sinopsis: 'En 1986, un sacerdotem Juan Felipe de Jesús (Héctor Illanes) documenta en docenas de videocassettes el duro proceso para reincorporar a tres niños salvajes a la sociedad oaxaqueña.' +
            'Sus buenas intenciones son interrumpidas por un trágico incendio que marca el destino de Juan Felipe y de los tres pequeños. Hoy en día, varias incógnitas rodean el caso, y los pobladores que vivieron el suceso guardar un misterio silcencio. (FILMAFFINITY).',
        youtube: ''
    },
    indice4:{
        cover: 'img/malacopacartel.jpg',
        sinopsis: 'Un hombre tímido y con pocas habilidades sociales se enfrenta a un gran reto en su trabajo cuando le piden que lidere una importante presentación, pero su mundo está a punto de cambiar gracias a la aparición de su alter ego alcoholizado.',
        youtube: ''
    },
    indice5:{
        cover: 'img/influenciacartel.jpg',
        sinopsis: 'Leonora una chica de 16 años, vive con su abuela en un cuarto de azotea aislada del mundo exterior desde hace 10 años, pues está convencida de que tiene el don de propiciar la muerte de gente a las que le ve el rostro. El mágico mundo que ha creado para sobrevivir'+
        ' el encierro se cimbra cuando su abuela muere y conoce a Brandon, un urbano principe a quien oculta de la mafia del barrio y por quien conocerá el Amor y será liberada de su fatídico don, no sin pagar un alto precio.',
        youtube: ''
    },
    indice6:{
        cover: 'img/elbailedelagacelacartel.jpg',
        sinopsis: 'El sueño de Eugenio es ganar un trofeo, pero nunca lo logró en el fútbol. A sus 72 años encuentra una última posibilidad en un concurso de bailes tropicales. Cuando puerde a su pareja, su única opción de ganar será bailar con otro hombre, enfrentándose a sus propios'+
        ' prejuicios y a los de su familia. Ahora cambiará el balón por el salón.',
        youtube: ''
    },
    indice7:{
        cover: 'img/corajecartel.jpg',
        sinopsis: 'PROXIMAMENTE',
        youtube: ''
    },
    indice8:{
        cover: 'img/alcaerlanochecartel.jpg',
        sinopsis: 'Basado en hechos reales. Ángel, un universitario que no gusta de meterse en problemasm termina envuelto con sus vecinos en el linchamiento de un tipo al que los gritos de auxilio de una adolescente, acusan de haberla violado. Jorge, un policía ministerial, vuelve al'+
        ' trabajo tras tiempo de ausencia por una pérdida personal. Él y un veterano policía, tras atender la emergencia, acaban llevándose a un lugar desolado a Ángel y a uno de sus vecinos, junto al hombre que lincharon. Ahí, los presionan a terminar lo que empezaron.',
        youtube: ''
    },
    indice9:{
        cover: 'img/lavenjanzadejairocartel.jpg',
        sinopsis: 'Jairo José Panilla Téllez (Cali, Colombia, 1944) es el padre del terror el suspenso y la ciencia ficción en Colombia, director entre otras, de películas como 27 horas con la muerte o Funeral Sinestro, que fueron un ícono y un éxito de taquilla por allá por los años 70 y 80 '+
        'Fue el primero en introducir efectos especiales en una película colombiana y ahora, con más de 70 años, está empeñado en sacar adelante su última película: la primera en 3D por fuera de la animación. Llevará por título El espiritu de la muerte. Él mismo, en su casa, se encarga de todos estos efectos, '+
        'trabajándolos, muchas veces de forma astesanal en el proceso de edición. Con entrevistas y fragmentos de películas, se arma este entrañable documental que sigue los pasos de quien, sin duda, es un personake en la historia del cine colombiano, cuya labor bien merece este homenaje.',
        youtube: ''
    },
}]


function fillModal(indice){
    $(".title-cartel, .trailer").removeClass("d-none")
    $(".sinopsis-cartel").removeClass("proximamente")
    $(".trailer").addClass("d-inline-flex")
    $(".img-cartel").attr("src", arrayMovies[0][indice].cover)
    $(".sinopsis-cartel").text(arrayMovies[0][indice].sinopsis)
    $(".youtube").attr("src", arrayMovies[0][indice].youtube)

    if(indice == 'indice7'){
        $(".title-cartel, .trailer").addClass("d-none")
        $(".sinopsis-cartel").addClass("proximamente")
        $(".trailer").removeClass("d-inline-flex")
    }
    $("#cartel-modal").modal("show")
}