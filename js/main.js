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
        'la cual explota en una tarde nublada mientras los dos dan un paseo por un terreno roco.',
        youtube: 'https://www.youtube.com/watch?v=0t1hjyeyxqg'
    },
    indice2:{
        cover: 'img/elañodelaplagacartel.jpg',
        sinopsis: 'Tras romper con Irene, los amigos de Victor se empeñan en encontrarle una novia, pero él no quiere olvidarla, incluso cuando aparece Lola. Súbitamente, Irene lo llama, nerviosa, y le pide ayuda porque la gente a su alrededor se comporta de modo diferente, como si hubieran '+
        'perdido sus recuerdos y emociones. Victor decide convertirse en el héroe que nunca fue para Irene y salir en su ayuda.',
        youtube: 'https://www.youtube.com/watch?v=WBH7N1W-2jc'
    },
    indice3:{
        cover: 'img/feralcartel.jpg',
        sinopsis: 'En 1986, un sacerdotem Juan Felipe de Jesús (Héctor Illanes) documenta en docenas de videocassettes el duro proceso para reincorporar a tres niños salvajes a la sociedad oaxaqueña.' +
            'Sus buenas intenciones son interrumpidas por un trágico incendio que marca el destino de Juan Felipe y de los tres pequeños. Hoy en día, varias incógnitas rodean el caso, y los pobladores que vivieron el suceso guardar un misterio silcencio. (FILMAFFINITY).',
        youtube: 'https://www.youtube.com/watch?v=L9jRHTiyfHk&t=20s'
    },
    indice4:{
        cover: 'img/malacopacartel.jpg',
        sinopsis: 'Un hombre tímido y con pocas habilidades sociales se enfrenta a un gran reto en su trabajo cuando le piden que lidere una importante presentación, pero su mundo está a punto de cambiar gracias a la aparición de su alter ego alcoholizado.',
        youtube: 'https://www.youtube.com/watch?v=9nI0nD1TtS0'
    },
    indice5:{
        cover: 'img/influenciacartel.jpg',
        sinopsis: 'Leonora una chica de 16 años, vive con su abuela en un cuarto de azotea aislada del mundo exterior desde hace 10 años, pues está convencida de que tiene el don de propiciar la muerte de gente a las que le ve el rostro. El mágico mundo que ha creado para sobrevivir'+
        ' el encierro se cimbra cuando su abuela muere y conoce a Brandon, un urbano principe a quien oculta de la mafia del barrio y por quien conocerá el Amor y será liberada de su fatídico don, no sin pagar un alto precio.',
        youtube: 'http://www.influenciathemovie.com/'
    },
    indice6:{
        cover: 'img/elbailedelagacelacartel.jpg',
        sinopsis: 'El sueño de Eugenio es ganar un trofeo, pero nunca lo logró en el fútbol. A sus 72 años encuentra una última posibilidad en un concurso de bailes tropicales. Cuando puerde a su pareja, su única opción de ganar será bailar con otro hombre, enfrentándose a sus propios'+
        ' prejuicios y a los de su familia. Ahora cambiará el balón por el salón.',
        youtube: 'https://www.youtube.com/watch?v=2oo1BN4ulAg&t=21s'
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
        youtube: 'https://www.youtube.com/watch?v=pCzdfCSs8II&t=19s'
    },
    indice9:{
        cover: 'img/lavenjanzadejairocartel.jpg',
        sinopsis: 'Jairo José Panilla Téllez (Cali, Colombia, 1944) es el padre del terror el suspenso y la ciencia ficción en Colombia, director entre otras, de películas como 27 horas con la muerte o Funeral Sinestro, que fueron un ícono y un éxito de taquilla por allá por los años 70 y 80 '+
        'Fue el primero en introducir efectos especiales en una película colombiana y ahora, con más de 70 años, está empeñado en sacar adelante su última película: la primera en 3D por fuera de la animación. Llevará por título El espiritu de la muerte. Él mismo, en su casa, se encarga de todos estos efectos, '+
        'trabajándolos, muchas veces de forma astesanal en el proceso de edición. Con entrevistas y fragmentos de películas, se arma este entrañable documental que sigue los pasos de quien, sin duda, es un personake en la historia del cine colombiano, cuya labor bien merece este homenaje.',
        youtube: 'https://www.youtube.com/watch?v=SaUKsOgbr_I'
    },
}]


function fillModal(indice){
    $(".title-cartel, .trailer").removeClass("d-none")
    $(".sinopsis-cartel").removeClass("proximamente")
    $(".trailer").addClass("d-inline-flex")
    $(".img-cartel").attr("src", arrayMovies[0][indice].cover)
    $(".sinopsis-cartel").text(arrayMovies[0][indice].sinopsis)
    $(".youtube").attr("href", arrayMovies[0][indice].youtube)

    if(indice == 'indice7'){
        $(".title-cartel, .trailer").addClass("d-none")
        $(".sinopsis-cartel").addClass("proximamente")
        $(".trailer").removeClass("d-inline-flex")
    }
    $("#cartel-modal").modal("show")
}

function showModal(){
    $("#about-us-modal").modal("show")
}

function closeModalEfect(){
    $("#about-us-modal").modal("hide")
    
}

var arraySocios = [{
    apapacho:{
        name: 'APAPACHO FILMS',
        imgCover: 'img/socios/Apapacho_blanco.png',
        description: 'Es una compañía productora de cine constituida en la Ciudad de México. Joven y con aire fresco, busca poco a poco un sitio entre las empresas más destacadas del rubro cinematográfico en México y también en el resto del mundo.</br>'+
                    'Contamos con el apoyo de un equipo de productores, directores y  artistas en México y en Europa con una gran trayectoria y con muchos proyectos audiovisuales premiados.</br>  Buscamos crear una plataforma más eficiente para la co producción de películas de ficción, documentales y animación entre los países europeos y México.',
        link: 'http://apapachofilms.com/'
    },
    bmmaso:{
        name: 'BMM & ASOCIADOS',
        imgCover: 'img/socios/bmmyasociados.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    creative:{
        name: 'CREATIVE SPACE',
        imgCover: 'img/socios/creativespace.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    chilito:{
        name: 'EL CHILITO ENMASCARADO',
        imgCover: 'img/socios/elchilitoenmascarado.png',
        description: 'Se constituyó legalmente de ley el 2 de agosto de 2013 por una bandita con más de 10 años de fletarse en la producción de cine independiente, series y comerciales.</be>'+
                      'Nuestra promesa (y sí no que pierda el América) es hacer  productos chulos de bonitos, que la gente quiera ir a ver al cine, y podamos recuperar nuestra marmaja para poder seguir haciendo pelis que le gusten desde tu hermano más pequeño (el pilón) hasta la amargada de tu suegra.',
        link: 'http://www.elchilitoenmascarado.mx/'
    },
    tomatito:{
        name: 'EL TOMATITO ENMASCARADO',
        imgCover: 'img/socios/eltomatitioenmascarado.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    framerate:{
        name: 'FRAME RATE',
        imgCover: 'img/socios/famerate.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    escuincla:{
        name: 'LA ESCUINCLA Y SU PIOJITO',
        imgCover: 'img/socios/laescuincleysupiojito.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    magofilms:{
        name: 'MAGO FILMS',
        imgCover: 'img/socios/magoproduction.png',
        description: 'NOS GUSTA LA ANIMACIÓN 3D, SERIE, DOCUMENTALES, CINE, CORTOMETRAJES, DISEÑO, MÚSICA, COMUNICACIÓN. NOS GUSTA EL MOVIMIENTO, LAS PERSONAS CREATIVAS QUE TRABAJAN APASIONADAMENTE Y SON CAPAZ DE APROVECHAR EL MOMENTO. Nos gusta la velocidad, pero no la precipitación. AMAMOS ENCONTRAR UN MOMENTO PARA TOMAR UN DESCANSO, TENER UN CAFÉ E INTERCAMBIAR IDEAS ...</br>'+
                    'SOMOS LO QUE HACEMOS Y ESO ES LO QUE AMAMOS.',
        link: 'http://www.magoproduction.com/'
    },
    framebyframe:{
        name: 'FRAME BY FRAME',
        imgCover: 'img/socios/frame\ by\ frame.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    pcmnormal:{
        name: 'PCM',
        imgCover: 'img/socios/pcm.png',
        description: 'PROXIMAMENTE',
        link: ''
    },
    pcmpost:{
        name: 'PCM POST',
        imgCover: 'img/socios/pcmpost.png',
        description: 'PROXIMAMENTE',
        link: ''
    }
}]


function showInfoSocios(element, socio) {
    $(element).addClass("active")
    $("#socios-modal").find(".wrapper-title").empty()
    $("#socios-modal").find(".link-socios").show()
    $("#socios-modal").find(".desc-socios").removeClass("proximamente")
    var name = arraySocios[0][socio].name
    var splitName = name.split("")
    console.log(splitName)
    for(let i in splitName){
        var appendThis = "<div class='letter efect'>"+ splitName[i] +"</div>";
        if(splitName[i] == "" || splitName[i] == " "){
            appendThis = "<div>&nbsp;&nbsp;&nbsp;</div>"
        }
        $("#socios-modal").find(".wrapper-title").append(appendThis)
    }
    $("#socios-modal").find(".title-socios").text(arraySocios[0][socio].name)
    $("#socios-modal").find(".logo-socios").attr("src", arraySocios[0][socio].imgCover)
    $("#socios-modal").find(".desc-socios").html(arraySocios[0][socio].description)
    $("#socios-modal").find(".link-socios").attr("href", arraySocios[0][socio].link)
    if(arraySocios[0][socio].link === ''){
        $("#socios-modal").find(".link-socios").hide()
        $("#socios-modal").find(".desc-socios").addClass("proximamente")
    }

    $("#socios-modal").modal("show")
}

function hideModalSocios(){
    $(".socios").find(".banner-socios").removeClass("active")
    $("#socios-modal").modal("hide")
}

function showVideo(){
    $("#demo-modal").modal("show")
    $("#video-demo").get(0).load()
    $("#video-demo").get(0).play()
}

function closeDemoReel(){
    $("#video-demo").get(0).pause()
    $("#demo-modal").modal("hide")
}

function removeEfecto(modal){
    $("#about-us-modal").find(".space").find(".move-left").animate({
        marginLeft: '-40%'
    }, 'slow')
    $("#about-us-modal").find(".space").find(".move-right").animate({
        marginLeft: '83%'
    }, 'slow')
    $(modal).find(".letter").removeClass("efect")
    setTimeout(function(){
        $(modal).modal("hide")
    }, 1000)
}


setTimeout(function(){
    $(".loading").fadeOut("slow")
    setTimeout(function(){
        $(".primary-element").fadeIn("slow")
    },1000)
},5000)

$(".modal").scroll(function(){
    if($("#about-us-modal").is(":visible")){
        scrolled = $("#about-us-modal").scrollTop();
        if(scrolled > 400 && scrolled < 800){
            $("#about-us-modal").find(".space").find(".move-left").animate({
                marginLeft: '0px'
            }, 'xslow')
            $("#about-us-modal").find(".space").find(".move-right").animate({
                marginLeft: '0px'
            }, 'xslow')
            setTimeout(function(){
                $("#about-us-modal").find(".space").find(".letter").addClass("efect")
            }, 1000)
        }else if(scrolled >= 1000){
            $("#about-us-modal").find(".team").find(".letter").addClass("efect")
        }
    }  
    if($("#enfoque-modal").is(":visible")){
        scrolled = $("#enfoque-modal").scrollTop();
        console.log(scrolled)
        if($(window).width() >= 1024 && $(window).height > 1200){
            $("#enfoque-modal").find(".letter").addClass("efect")
        }
        else{
            if(scrolled > 250){
                $("#enfoque-modal").find(".letter").addClass("efect")
            }
        }
    }   
});

